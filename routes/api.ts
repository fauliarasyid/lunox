import Response from "../vendor/laranode/Illuminate/Support/Facades/Response";
import WelcomeController from "../app/Http/Controllers/WelcomeController";
import Route from "../vendor/laranode/Illuminate/Support/Facades/Route";

Route.prefix("/secure")
  .middleware("auth")
  .group(() => {
    Route.get("/home", WelcomeController.home).middleware("session");
  });

Route.get("/", () => {
  return Response.make({ message: "Hello" });
});