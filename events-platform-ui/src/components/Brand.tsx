const Brand = () => {
  return (
    <div className="bg-white text-center py-12">
      <h2 className="text-3xl font-bold text-[#242565]">Join these brands</h2>
      <p className="text-xl text-[#6A6A6A] mt-10">
        We've had the pleasure of working with industry-defining brands. <br />
        These are just some of them.
      </p>
      <div className="grid grid-cols-5 gap-8 mt-10 mx-auto max-w-screen-lg">
        <img
          src="/sponsors/spotify.png"
          alt="Spotify"
          className="h-10 mx-auto"
        />
        <img src="/sponsors/google.png" alt="Google" className="h-10 mx-auto" />
        <img src="/sponsors/stripe.png" alt="Stripe" className="h-12 mx-auto" />
        <img
          src="/sponsors/youtube.png"
          alt="YouTube"
          className="h-16 mx-auto"
        />
        <img
          src="/sponsors/microsoft.png"
          alt="Microsoft"
          className="h-16 mx-auto"
        />
        <img src="/sponsors/medium.png" alt="Medium" className="h-18 mx-auto" />
        <img src="/sponsors/zoom.png" alt="Zoom" className="h-10 mx-auto" />
        <img src="/sponsors/uber.png" alt="Uber" className="h-10 mx-auto" />
        <img src="/sponsors/grab.png" alt="Grab" className="h-10 mx-auto" />
        <img src="/sponsors/shopee.png" alt="Shopee" className="h-10 mx-auto" />
      </div>
    </div>
  );
};

export default Brand;
