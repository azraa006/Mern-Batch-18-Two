import React from 'react'
import ProductCards from './ProductCards'
const Product = () => {
  return (
    <>


 <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          {/* Heading & Filters */}

          <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
            

<ProductCards/>
<ProductCards/>
<ProductCards/>
<ProductCards/>


<ProductCards/>
<ProductCards/>
<ProductCards/>
<ProductCards/>




            
          </div>

        </div>
       
       
      </section>

    
    </>
  )
}

export default Product