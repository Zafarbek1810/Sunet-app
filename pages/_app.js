import { ModalProvider } from '../src/Context/ModalContext/Context'
import Modal from "../src/Components/Common/ContactModal"
import FormModal from "../src/Components/Common/ContactModal/FormModal"
import '../styles/globals.css'
import "react-phone-number-input/style.css";
import { HeaderProvider } from '../src/Context/HeaderContext';

function MyApp({ Component, pageProps }) {
  return(
    <HeaderProvider>
      <ModalProvider>
       <Component {...pageProps} />
       <Modal>
          <FormModal />
        </Modal>
      </ModalProvider>
    </HeaderProvider>
  )
}

export default MyApp
