export const WithData =
  <T,>(Component: React.FC<{ data: T[] }>) =>
  ({ data }: { data: T[] | undefined }) => {
    if (!data?.length) return null;
    return <Component data={data} />;
  };