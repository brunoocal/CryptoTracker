class Http {
  static instance = new Http();

  get = async (url) => {
    try {
      const request = await fetch(url);

      const json = await request.json();

      return json;
    } catch (err) {
      console.log("http get methor err", err);
      throw Error(err);
    }
  };

  post = async (url, body) => {
    try {
      const request = await fetch(url, { method: "POST", body });

      const json = await request.json();

      return json;
    } catch (err) {
      console.log("http post methor err", err);
      throw Error(err);
    }
  };

  remove = async (url) => {
    try {
      const request = await fetch(url, {
        method: "DELETE",
      });
      const json = await request.json();
      return json;
    } catch (err) {
      console.error("HTTP DELETE Error: ", err);
      throw Error(err);
    }
  };

  put = async (url, body) => {
    try {
      const request = await fetch(url, {
        method: "PUT",
        body,
      });
      const json = await request.json();
      return json;
    } catch (err) {
      console.error("HTTP PUT Error: ", err);
      throw Error(err);
    }
  };
}

export default Http;
