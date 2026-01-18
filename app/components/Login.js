import MainButton from "./MainButton";


const Login = () => {
    return (
      <div>
        <form className="flex flex-col gap-5">
          {/* Email Address */}
          <div>
            <label htmlFor="email">Email Address</label>
            <br></br>
            <input
              className="p-4 w-full bg-[#a3a3a3]/10 rounded-2xl outline-gray-200 mt-2"
              type="text"
              name="email"
              placeholder="Enter your email address"
            />
          </div>
          {/* Password */}
          <div>
            <label htmlFor="password">Password</label>
            <br></br>
            <input
              className="p-4 w-full bg-[#a3a3a3]/10 rounded-2xl outline-gray-200 mt-2"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
                {/* Button */}
                <MainButton text={"Login now"} />
        </form>
      </div>
    );
}

export default Login