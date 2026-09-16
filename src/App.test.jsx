import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import projects from "./data/projects";

jest.mock("./data/projects", () => ({ __esModule: true, default: [] }));

const originalFetch = global.fetch;

beforeAll(() => {
  // jsdom does not implement the browser's native dialog methods.
  HTMLDialogElement.prototype.showModal = function () {
    this.setAttribute("open", "");
  };
  HTMLDialogElement.prototype.close = function () {
    this.removeAttribute("open");
  };
});

beforeEach(() => {
  localStorage.clear();
  window.history.replaceState({}, "", "/");
  global.fetch = jest.fn();
  projects.length = 0;
});

afterEach(() => {
  global.fetch = originalFetch;
});

test("theme selection survives navigation and remounting", () => {
  const view = render(<App />);
  fireEvent.click(screen.getByRole("button", { name: "Switch to light mode" }));
  expect(document.documentElement).not.toHaveClass("dark");
  expect(localStorage.getItem("portfolio-theme")).toBe("light");
  fireEvent.click(screen.getByRole("link", { name: "About" }));
  expect(screen.getByRole("heading", { name: /About Me/ })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Switch to dark mode" })).toBeInTheDocument();
  view.unmount();
  render(<App />);
  expect(screen.getByRole("button", { name: "Switch to dark mode" })).toBeInTheDocument();
});

test("local project details open, close, and restore scrolling in StrictMode", () => {
  projects.push({ id: 1, title: "Portfolio", description: "Project description", link: "https://example.com" });
  window.history.replaceState({}, "", "/projects");
  render(<React.StrictMode><App /></React.StrictMode>);
  const trigger = screen.getByRole("button", { name: "Lihat detail Portfolio" });
  trigger.focus();
  fireEvent.click(trigger);
  const dialog = screen.getByRole("dialog", { name: "Portfolio" });
  expect(within(dialog).getByText("Project description")).toBeInTheDocument();
  expect(within(dialog).getByRole("link", { name: "Buka Link" })).toHaveAttribute("href", "https://example.com");
  expect(document.body.style.overflow).toBe("hidden");
  fireEvent.click(within(dialog).getByRole("button", { name: "Tutup" }));
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  expect(document.body.style.overflow).toBe("");
  expect(trigger).toHaveFocus();
  fireEvent.click(trigger);
  fireEvent(screen.getByRole("dialog"), new Event("cancel", { bubbles: true }));
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  expect(global.fetch).not.toHaveBeenCalled();
});

test("project without description or link still has usable details", () => {
  projects.push({ id: 2, title: "Offline project" });
  window.history.replaceState({}, "", "/projects");
  render(<App />);
  fireEvent.click(screen.getByRole("button", { name: "Lihat detail Offline project" }));
  expect(screen.getByRole("button", { name: "Link Tidak Tersedia" })).toBeDisabled();
  fireEvent.click(screen.getByRole("button", { name: "Tutup detail proyek" }));
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});

test("empty local projects display immediately without an API request", () => {
  window.history.replaceState({}, "", "/projects");
  render(<App />);
  expect(screen.getByText("Belum ada proyek tersedia.")).toBeInTheDocument();
  expect(screen.queryByRole("status")).not.toBeInTheDocument();
  expect(global.fetch).not.toHaveBeenCalled();
});

test.each(jest.requireActual("./data/projects").default)(
  "clicking the image opens the matching details for $title",
  project => {
    projects.push(...jest.requireActual("./data/projects").default);
    window.history.replaceState({}, "", "/projects");
    render(<App />);
    expect(screen.getAllByRole("button", { name: /^Lihat detail / })).toHaveLength(4);
    fireEvent.click(screen.getByRole("img", { name: project.title }));
    const dialog = screen.getByRole("dialog", { name: project.title });
    expect(within(dialog).getByRole("img", { name: project.title })).toHaveAttribute("src", project.images[0].url);
    expect(within(dialog).getAllByRole("img")).toHaveLength(project.images.length);
    project.images.slice(1).forEach((image, index) => {
      expect(within(dialog).getByRole("img", { name: `${project.title} - gambar ${index + 2}` })).toHaveAttribute("src", image.url);
    });
    expect(within(dialog).getByText(project.description)).toBeInTheDocument();
    expect(within(dialog).getByRole("heading", { name: "Ringkasan" })).toBeInTheDocument();
    project.features.forEach(feature => expect(within(dialog).getByText(feature)).toBeInTheDocument());
    (project.links || []).forEach(link => {
      const button = within(dialog).getByRole("link", { name: link.label });
      expect(button).toHaveAttribute("href", link.url);
      expect(button).toHaveAttribute("target", "_blank");
      expect(button).toHaveAttribute("rel", "noopener noreferrer");
    });
    fireEvent.click(within(dialog).getByRole("button", { name: "Tutup detail proyek" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(global.fetch).not.toHaveBeenCalled();
  }
);
