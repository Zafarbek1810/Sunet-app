import { ModalProvider } from '../src/Context/ModalContext/Context'
import Modal from "../src/Components/Common/ContactModal"
import FormModal from "../src/Components/Common/ContactModal/FormModal"
import '../styles/globals.css'
import "react-phone-number-input/style.css";

function MyApp({ Component, pageProps }) {
  return(
    <div>
      <ModalProvider>
       <Component {...pageProps} />
       <Modal>
          <FormModal />
        </Modal>
      </ModalProvider>
    </div>
  )
}

export default MyApp
