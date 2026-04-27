import { render, screen, waitFor } from "@testing-library/react"
import TampilanProduk from "../../pages/produk"

// Mocking global fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: [] }), 
  })
) as jest.Mock;

// Mocking Next Router
jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/product",
      pathname: "",
      query: {},
      asPath: "",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      isReady: true,
    }
  },
}))

describe("Product Page", () => {
  it("renders product page correctly", async () => {
    const { asFragment } = render(<TampilanProduk />)
    
    await waitFor(() => {
      expect(screen.getByTestId("title").textContent).toBe("Daftar Produk");
    })

    expect(asFragment()).toMatchSnapshot()
  })
})