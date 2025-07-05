import { Redirect } from "expo-router";
import { useState } from "react";

export default function Index() {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const checkAuth = async () => {
//       const token = await SecureStore.getItemAsync("token");
//       setIsAuthenticated(!!token);
//       setLoading(false);
//     };

//     checkAuth();
//   }, []);

//   if (loading) return null;

  return <Redirect href={isAuthenticated ? "/(tabs)" : "/signin"} />;
}
