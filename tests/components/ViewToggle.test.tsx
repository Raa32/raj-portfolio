import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ViewToggle from "@/components/ui/ViewToggle";
import { StoreProvider } from "@/components/StoreProvider";
import { createPortfolioStore } from "@/lib/store";

function renderWithStore(store = createPortfolioStore({ reducedMotion: false })) {
  render(
    <StoreProvider store={store}>
      <ViewToggle />
    </StoreProvider>
  );
  return store;
}

describe("ViewToggle", () => {
  beforeEach(() => {
    window.history.replaceState(null, "", "/");
  });

  it("is a button with aria-pressed", () => {
    renderWithStore();
    const button = screen.getByRole("button", { name: /classic view/i });
    expect(button).toHaveAttribute("aria-pressed", "false");
  });

  it("clicking flips the store", async () => {
    const user = userEvent.setup();
    const store = renderWithStore();

    await user.click(screen.getByRole("button", { name: /classic view/i }));
    expect(store.getState().viewMode).toBe("classic");
    expect(
      screen.getByRole("button", { name: /classic view/i })
    ).toHaveAttribute("aria-pressed", "true");

    await user.click(screen.getByRole("button", { name: /classic view/i }));
    expect(store.getState().viewMode).toBe("rich");
  });

  it("?view=classic in the URL initialises classic mode", () => {
    window.history.replaceState(null, "", "/?view=classic");
    const store = renderWithStore();
    expect(store.getState().viewMode).toBe("classic");
    expect(
      screen.getByRole("button", { name: /classic view/i })
    ).toHaveAttribute("aria-pressed", "true");
  });
});
