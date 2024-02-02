import { ReactElement } from "react";

export default function LoginLayout(): ReactElement {


  return (
    <section className="flex justify-center items-center h-screen bg-gray-500">
      <Login />
    </section>
  )
}

const Login = () => {
  return (
    <section className="flex flex-col">
      <label>
         {`Username: `}
        <input type="text" className=" border border-gray-800 rounded-md" />
      </label>
      <label  className=" mt-1">
        {`Password: `}
        <input type="text" className=" border border-gray-800 rounded-md ml-1" />
      </label>
     <LoginBtn />
      <label  className=" mt-4">
        <input type="checkbox" checked={false} />
        {` `}
        {`Remember me`}
      </label>

    </section>
  )
}

const LoginBtn = () => {
  return (
    <section className="flex justify-between">
      <button className=" border border-gray-800 rounded-md">
        Login
      </button>
      <button className=" border border-gray-800 rounded-md">
        Sign up
      </button>
    </section>
  )
}
