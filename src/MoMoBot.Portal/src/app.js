// import 'ant-design-pro/dist/ant-design-pro.css';

export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};

console.log("Current Env: "+ process.env.NODE_ENV)
