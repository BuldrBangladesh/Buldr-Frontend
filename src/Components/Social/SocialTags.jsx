import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function SocialTags({ title,color ,checked}) {
    const navigator = useNavigate()
    return (
        <div class="flex items-center my-2" >
            <input type="checkbox" checked={checked}
                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                <span className={`bg-${color}-100 text-${color}-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-${color}-200 dark:text-${color}-800`}>

                    {title}
                </span>
            </label>
        </div>
    )
}
