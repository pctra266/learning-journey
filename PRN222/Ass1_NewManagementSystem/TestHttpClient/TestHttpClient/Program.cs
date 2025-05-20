namespace TestHttpClient
{
    internal class Program
    {
        private static HttpClient sharedClient = new()
        {
            BaseAddress = new Uri("https://jsonplaceholder.typicode.com"),
        };
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
        }
    }
}
