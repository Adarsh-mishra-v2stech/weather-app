import Weather from "./modules/weather";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WeatherProvider } from "./context";

const queryClient = new QueryClient();

function App() {
  return (
    <WeatherProvider>
      <QueryClientProvider client={queryClient}>
        <div>
          <Weather />
        </div>
      </QueryClientProvider>
    </WeatherProvider>
  );
}

export default App;
