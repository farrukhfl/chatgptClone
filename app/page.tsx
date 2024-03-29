import {BoltIcon, ExclamationTriangleIcon, SunIcon} from "@heroicons/react/24/outline"
export default function Home() {
  return (
    
   <div className="flex flex-col items-center h-screen justify-center px-2 text-white">
    <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>


    <div  className="flex space-x-2 text-center">
      <div>
        <div className="flex flex-col items-center justify-center mb-5">
          <SunIcon className="h-8 w-8" />
          <h2>Example</h2>
        </div>

        <div className="space-y-2">
            <p className="infoText">Explain something to Me</p>
        <p className="infoText">"What is the differencec between a Dog and a Cat"</p>
           <p className="infoText">"What is the color of the sun"</p>
        </div>
      </div>

      <div>
        <div className="flex flex-col items-center justify-center mb-5">
          <BoltIcon className="h-8 w-8" />
          <h2>Capabilities</h2>
        </div>

        <div className="space-y-2">
            <p className="infoText">Change the ChatGPT modal to Use</p>
        <p className="infoText">Messages are stored in firebase firestore</p>
           <p className="infoText">Hot toast notifications when ChatGPT is thinking</p>
        </div>
      </div>

      <div>
        <div className="flex flex-col items-center justify-center mb-5">
          <ExclamationTriangleIcon className="h-8 w-8" />
          <h2>Limitations</h2>
        </div>

        <div className="space-y-2">
            <p className="infoText">May occasionally generate incorrect information</p>
        <p className="infoText">May occasionally produce harmfull instructions or biased content</p>
           <p className="infoText">Limited knowledge of world and event after 2021</p>
        </div>
      </div>
    </div>

    
   </div>     
  )
}

