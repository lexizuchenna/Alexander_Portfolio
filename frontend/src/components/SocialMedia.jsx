import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
                <a href="https://twitter.com/lexiz_uchenna_" target="_blank" rel="noreferrer">
                    <BsTwitter />
                </a>
            </div>
            <div>
                <a href="https://facebook.com/lexizuchenna" target="_blank" rel="noreferrer">
                    <FaFacebookF />
                </a>
            </div>
            <div>
                <a href="https://instagram.com/lexiz_uchenna" target="_blank" rel="noreferrer">
                    <BsInstagram />
                </a>
            </div>
        </div>
    )
}

export default SocialMedia
