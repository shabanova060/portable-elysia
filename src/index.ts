import { app } from "~/app";
import { env } from "~/env";

app.listen(env.PORT, () => {
  console.log(`Development server started at http://localhost:${env.PORT}`);
});
