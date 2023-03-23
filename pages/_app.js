import { ModalProvider } from '../src/Context/ModalContext/Context'
import Modal from "../src/Components/Common/ContactModal"
import FormModal from "../src/Components/Common/ContactModal/FormModal"
import '../styles/globals.css'
import "react-phone-number-input/style.css";
import { HeaderProvider } from '../src/Context/HeaderContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function MyApp({ Component, pageProps }) {
  return(
    <HeaderProvider>
      <ModalProvider>
       <Component {...pageProps} />
       <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
       <Modal>
          <FormModal />
        </Modal>
      </ModalProvider>
    </HeaderProvider>
  )
}

export default MyApp
