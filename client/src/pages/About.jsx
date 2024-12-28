import React from 'react';

export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <h1 className='text-3xl font-bold mb-6 text-slate-800 text-center'>
        About XenonStack Real-Estate
      </h1>
      
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <img 
            src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Real Estate"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
        
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Our Mission</h2>
          <p className='mb-4 text-slate-700'>
            Empowering clients with data-driven insights, personalized services, and in-depth market expertise. We help you navigate the real estate world easily.
          </p>
          <p className='text-slate-700'>
            Whether buying, selling, or renting, XenonStack provides seamless, end-to-end solutions for all your real estate needs.
          </p>
        </div>
      </div>

      <div className="my-16 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-100 p-6 rounded-lg shadow-md">
            <img 
              src="https://cardinalpath.wpenginepowered.com/wp-content/uploads/2019/03/data-driven-thumb-1024x640.png" 
              alt="Data-Driven Insights"
              className="rounded-lg mb-4 w-full h-auto object-cover"
            />
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Data-Driven Insights</h3>
            <p className="text-slate-700">We use advanced data analytics to guide every decision, ensuring you get the best value.</p>
          </div>

          <div className="bg-slate-100 p-6 rounded-lg shadow-md">
            <img 
              src="https://img.freepik.com/free-vector/experts-concept-illustration_114360-451.jpg?t=st=1735374167~exp=1735377767~hmac=76c71d7a1f35c634dbeecfbb7b9a84708cad19812711115fbad5992f93b9b65f&w=996" 
              alt="Personalized Service"
              className="rounded-lg mb-4 w-full h-auto object-cover"
            />
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Personalized Service</h3>
            <p className="text-slate-700">Our experts provide tailored advice to meet your unique needs in the real estate market.</p>
          </div>

          <div className="bg-slate-100 p-6 rounded-lg shadow-md">
            <img 
              src="https://img.freepik.com/free-vector/business-team-communicating-via-social-media_74855-5439.jpg?t=st=1735374148~exp=1735377748~hmac=9c8d76d5e1d52d0afbaeb86855596bc23992c4ddc69f55860f297f97d6fc698e&w=996" 
              alt="Market Expertise"
              className="rounded-lg mb-4 w-full h-auto object-cover"
            />
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Market Expertise</h3>
            <p className="text-slate-700">With years of industry experience, we offer unmatched knowledge and insights into the real estate market.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
