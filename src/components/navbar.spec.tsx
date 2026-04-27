import { render, screen } from "@testing-library/react";
import Navbar from "../components/layouts/navbar";
import { useSession } from "next-auth/react";

// Mocking useSession dari next-auth
jest.mock("next-auth/react");

// Mocking Next Router & Image
jest.mock("next/router", () => ({
  useRouter: () => ({ pathname: "/" }),
}));
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

describe("Navbar Component", () => {
  it("should render navbar correctly", () => {
    (useSession as jest.Mock).mockReturnValue({ data: null });
    
    const { asFragment } = render(<Navbar />);
    
    expect(screen.getByText("Sign In")).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });
});