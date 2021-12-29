import { Fragment, useState } from 'react'
import { Listbox, Transition, RadioGroup } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import Link from 'next/link'

const people = [
    {
        name: 'Git',
        values: [
            { name: 'All' , href: '/git-all'},
            { name: 'Branches', href: '/git-branches' },
            { name: 'Configuration' , href: '/configuration'},
            { name: 'Remotes', href: '/remotes' },
            { name: 'Repository', href: '/repository' },
            { name: 'Plumbing commands', href: '/plubling-commands' },
        ],
    },
    {
        name: 'Redis',
        values: [
            { name: 'All' },
            { name: 'Keys & Expiration' },
            { name: 'Hashes' },
            { name: 'Lists' },
            { name: 'Sets' },
            { name: 'Sorted Sets' },
            { name: 'Transactions' },
            { name: 'Bitfields' },
            { name: 'Streams' },
            { name: 'Producer' },
            { name: 'Consumer' },
        ],
    },
    {
        name: 'Docker',
        values: [
            { name: 'All' },
            { name: 'Containers' },
            { name: 'Images' },
            { name: 'Docker Hub' },
            { name: 'Volumes' },
            { name: 'Networking' },
            { name: 'Docker Compose' },
        ],
    },
    {
        name: 'Kubernetes',
        values: [
            { name: 'All' },
            { name: 'Objects' },
            { name: 'Services' },
            { name: 'Data & Volumes' },
            { name: 'Images' },
            { name: 'Deployment' },
        ],
    },
    {
        name: 'MongoDB',
        values: [
            { name: 'All' },
            { name: 'Mongod' },
            { name: 'Data Import, Export' },
            { name: 'CRUD Operations' },
            { name: 'Indexing' },
            { name: 'Aggregation' },
            { name: 'Replication' },
            { name: 'Sharding' },
        ],
    },
    {
        name: 'Tensorflow.js',
        values: [
            { name: 'All' },
            { name: 'Tensors' },
            { name: 'Operations' },
            { name: 'Regression' },
            { name: 'Classification' },
            { name: 'CNN' },
            { name: 'Transfer Learning' },
            { name: 'NLP Fundamentals' },
        ],
    },
]

export default function ListBox() {
  const [selected, setSelected] = useState(people[0])
  const [selectedItem, setSelectedItem] = useState(selected.values[0].name)
  
  async function hell (event) {
    await setSelected(event)
    await setSelectedItem(event.values[0].name)
  }

  return (
    <div className="w-full m-3">
      <Listbox value={selected} onChange={hell} className="bg z-20 relative bg-indigo-400 rounded-lg text-white backdrop-blur-md bg-opacity-50" >
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 z-20 text-left  shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full p-1 bg-white backdrop-blur-md mt-1 hover:text-black overflow-auto z-20 text-base rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `${active ? 'text-gray-900 bg-amber-100' : 'text-gray-900'}
                          cursor-default select-none relative py-2 pl-2 pr-4 z-20 hover:bg-gray-400 hover:bg-opacity-50 hover:backdrop-blur-md hover:rounded-md`
                  }
                  value={person}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? 'font-medium' : 'font-normal'
                        } block truncate text-left pl-2 z-20 hover:font-semibold`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span
                          className={`${
                            active ? 'text-amber-600' : 'text-amber-600'
                          }
                                absolute inset-y-0 right-0 flex items-center pl-3 pr-3 z-20`}
                        >
                          <CheckIcon className="w-5 h-5 z-20" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      <div className="w-full max-w-md mx-auto pt-2">
        <RadioGroup value={selectedItem} onChange={setSelectedItem}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {selected.values.map((plan) => (
                <a href={plan.href} key={plan.name}  className="mt-1">
              <RadioGroup.Option
                key={plan.name} 
                value={plan.name}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-offset-1 ring-offset-sky-300 ring-white ring-opacity-60'
                      : ''
                  }
                  ${
                    checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white'
                  }
                    relative rounded-lg mt-1 px-5 py-2 cursor-pointer flex focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {plan.name}
                          </RadioGroup.Label>
                        </div>
                      </div>
                      {checked && (
                        <div className="flex-shrink-0 text-white">
                          <CheckIcon className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
              </a>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

function helloworld() {
    
}