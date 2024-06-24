import "./FacebookFeatured.scss";
import { useEffect } from "react";

function FacebookFeatured() {
  useEffect(() => {
    // Load the Facebook SDK
    const loadFbSdk = () => {
      if (!window.FB) {
        const script = document.createElement("script");
        script.src = "https://connect.facebook.net/en_US/sdk.js";
        script.async = true;
        script.defer = true;
        script.onload = () => {
          window.FB.init({
            appId: "980869106839655",
            autoLogAppEvents: true,
            xfbml: true,
            version: "v10.0",
          });
          window.FB.XFBML.parse();
        };
        document.body.appendChild(script);
      } else {
        window.FB.XFBML.parse();
      }
    };

    loadFbSdk();
  }, []);

  return (
    <section className="facebook-featured">
      <div
        className="fb-page"
        data-href="https://www.facebook.com/blinklashandnailbareverything4you"
        data-tabs="timeline"
        data-width=""
        data-height=""
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="true"
        data-show-facepile="false"
      >
        <blockquote
          cite="https://www.facebook.com/blinklashandnailbareverything4you"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/blinklashandnailbareverything4you">
            Blink Lash &amp; Nail Bar
          </a>
        </blockquote>
      </div>
    </section>
  );
}

export default FacebookFeatured;
