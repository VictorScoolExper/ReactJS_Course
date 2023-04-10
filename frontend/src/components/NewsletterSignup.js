import { useEffect } from "react";
import classes from "./NewsletterSignup.module.css";
import { useFetcher } from "react-router-dom";

function NewsletterSignup() {
  const fetcher = useFetcher();
  // this helps us send information behind the scenes without triggering route changes
  const { data, state } = fetcher;

    useEffect(()=> {
        if(state === 'idle' && data && data.message){
            window.alert(data.message);
        }
    }, [data, state]);

  return (
    // this is when form needs to be used outside of route or you do not need to load a new page
    // get for when you have shared components
    <fetcher.Form
      method="post"
      action="/newsletter"
      className={classes.newsletter}
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
