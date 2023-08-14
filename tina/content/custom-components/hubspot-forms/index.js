import * as SelectPrimitive from '@radix-ui/react-select'
import React from 'react'
import { wrapFieldsWithMeta } from 'tinacms'

const SelectItem = React.forwardRef(({ children, ...props }, forwardedRef) => {
  return (
    <SelectPrimitive.Item
      className="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative SelectPrimitive-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
      {...props}
      ref={forwardedRef}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center" />
    </SelectPrimitive.Item>
  )
})

SelectItem.displayName = 'SelectItem'

export const hubspotForms = () => ({
  name: 'hubspotForms',
  label: 'Hubspot Forms',
  type: 'string',
  ui: {
    parse: (val) => String(val),
    component: wrapFieldsWithMeta(({ input }) => {
      const [list, setList] = React.useState([])

      React.useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('/api/hubspot')
          return response.json()
        }

        fetchData().then(({ results }) => {
          setList([results[0], results[0]])
        })
      }, [])

      return (
        <div>
          <SelectPrimitive.Root
            onValueChange={(e) => {
              input.onChange(e)
            }}
          >
            <SelectPrimitive.Trigger className="inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white text-violet11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none">
              <SelectPrimitive.Value placeholder="Pick a Form" />
            </SelectPrimitive.Trigger>
            <SelectPrimitive.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
              <SelectPrimitive.Viewport className="p-[5px]">
                {list.map(({ name, id }, idx) => (
                  <SelectItem
                    key={`list-${idx}`}
                    className="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
                    value={`name:${name}-id:${id}`}
                  >
                    {name}
                  </SelectItem>
                ))}
              </SelectPrimitive.Viewport>
            </SelectPrimitive.Content>
          </SelectPrimitive.Root>
        </div>
      )
    }),
  },
})
