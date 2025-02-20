import { ReduxProvider } from "@/components/providers/ReduxProvider";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <div className="min-h-screen">{children}</div>
    </ReduxProvider>
  );
}
