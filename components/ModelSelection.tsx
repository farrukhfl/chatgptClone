'use client'
import useSWR from "swr"
import Select from "react-select"


const fetchModel = () => fetch('/api/getEngine').then((res)=> res.json())


function ModelSelection() {

  const {data: models, isLoading} = useSWR("models", fetchModel)
  const {data: model, mutate: setModel} = useSWR("model", {
    fallbackData: 'text-davinci-003'
  })
  return (
    <div>
      <Select className="mt-2" isSearchable options={models.modelOptions} defaultValue={model} placeholder={model} isLoading={isLoading} menuPosition="fixed" classNames={{
        control: (state) => "bg-[#434654] border-[#434654]"
      }}
      onChange={(e)=> setModel(e.value)}
      />
    </div>
  )
}

export default ModelSelection