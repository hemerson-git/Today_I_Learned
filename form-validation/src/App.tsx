import { CustomInput } from "./components/CustomInput";
import { Form } from "./components/Form";

function App() {
  return (
    <main className="bg-secondary-900 min-h-screen flex items-center justify-center text-white">
      <section className="container flex justify-center">
        <div className="flex max-w-[820px] bg-red-200 items-stretch">
          <div className="overflow-hidden flex-1 h-full relative">
            <img
              src="../src/assets/imgs/strawberries.jpg"
              alt=""
              className="object-cover h-full"
            />

            <div
              className="
              absolute bottom-1/2 translate-y-1/2 left-2 right-2 backdrop-blur-md bg-white/30 
              rounded-md text-center px-6 py-8 select-none"
            >
              <h1 className="text-2xl">Wellcome to our page</h1>

              <span className="block">We're very happy to have you here!</span>
              <span>
                Hope you have a great experience, by using our platform!
              </span>
            </div>
          </div>

          <div className="flex-1 flex flex-col px-4 py-5 bg-secondary-700">
            <Form />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
