import React from 'react'

const TrustedBy = () => {
  return (
    <div className='pt-76'>
        <div className="max-w-7xl mx-auto p-4">
            <h2 className="text-3xl font-semibold text-center mb-6">Trusted by leading brands and retailers</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                <div className="flex items-center justify-center p-4 bg-white shadow rounded-lg">
                    <img src="/path/to/logo1.png" alt="Company 1" className="h-12" />           
                    </div>
                <div className="flex items-center justify-center p-4 bg-white shadow rounded-lg">
                    <img src="/path/to/logo2.png" alt="Company 2" className="h-12" />       
                    </div>
                <div className="flex items-center justify-center p-4 bg-white shadow rounded-lg">
                    <img src="/path/to/logo3.png" alt="Company 3" className="h-12" />       
                    </div>
                <div className="flex items-center justify-center p-4 bg-white shadow rounded-lg">
                    <img src="/path/to/logo4.png" alt="Company 4" className="h-12" />   
                    </div>
                <div className="flex items-center justify-center p-4 bg-white shadow rounded-lg">
                    <img src="/path/to/logo5.png" alt="Company 5" className="h-12" />   
                    </div>
                <div className="flex items-center justify-center p-4 bg-white shadow rounded-lg">
                    <img src="/path/to/logo6.png" alt="Company 6" className="h-12" />           
                    </div>
            </div>
        </div>
    </div>
  )
}

export default TrustedBy