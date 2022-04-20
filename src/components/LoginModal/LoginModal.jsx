import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { toogleAuthModal } from "../redux/auth/auth.action";

const LoginModal = ({ open, toogle }) => {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-20 overflow-y-auto"
          onClose={toogle}
        >
          <div className="min-h-screen px-4  text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <form class=" inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform   bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="username"
                  >
                    Username
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    placeholder="Username"
                  />
                </div>
                <div class="mb-6">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="password"
                  >
                    Password
                  </label>
                  <input
                    class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    value={user.password}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                    placeholder="******************"
                  />
                  <p class="text-red-500 text-xs italic">
                    Please choose a password.
                  </p>
                </div>
                <div class="flex items-center justify-between">
                  <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Sign In
                  </button>
                  <a
                    class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    href="#_"
                  >
                    Forgot Password?
                  </a>
                </div>
              </form>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

const mapStateToProps = (state) => ({
  open: state.auth.show,
});
const mapDispatchToProps = (dispatch) => ({
  toogle: () => dispatch(toogleAuthModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
