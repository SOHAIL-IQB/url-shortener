import OutlinedButton from "./../components/OutlinedButton"
import FilledButton from "./../components/FilledButton";
import { LiaSignInAltSolid } from "react-icons/lia";
import { SiGnuprivacyguard } from "react-icons/si";
import { MdExposurePlus1 } from "react-icons/md";

const ButtonScreen = ()=>{
    return(
        <>
            {/* OutlinedButton */}
            {/* Color Variation */}
            <OutlinedButton/>
            <OutlinedButton color="primary"/>
            <OutlinedButton color="secondary"/>
            <OutlinedButton color="success"/>
            <OutlinedButton color="danger"/>
            <OutlinedButton color="danger">SIGNIN</OutlinedButton>
            {/* Size Variation */}
            <OutlinedButton size="small"/>
            <OutlinedButton size="regular"/>
            <OutlinedButton size="medium"/>
            <OutlinedButton size="large"/>
            {/* Icon Variation */}
            <OutlinedButton><LiaSignInAltSolid/>SIGNIN</OutlinedButton>
            <OutlinedButton><SiGnuprivacyguard/>SIGNUP</OutlinedButton>
            <OutlinedButton><MdExposurePlus1/>Create a short URL</OutlinedButton>
            <OutlinedButton>Go to link</OutlinedButton>

            {/* FilledButton */}
            {/* Color Variation */}
            <FilledButton/>
            <FilledButton color="primary"/>
            <FilledButton color="secondary"/>
            <FilledButton color="success"/>
            <FilledButton color="danger"/>
            <FilledButton color="danger">SIGNIN</FilledButton>
            {/* Size Variation */}
            <FilledButton size="small"/>
            <FilledButton size="regular"/>
            <FilledButton size="medium"/>
            <FilledButton size="large"/>
            {/* Icon Variation */}
            <FilledButton><LiaSignInAltSolid/>SIGNIN</FilledButton>
            <FilledButton><SiGnuprivacyguard/>SIGNUP</FilledButton>
            <FilledButton><MdExposurePlus1/>Create a short URL</FilledButton>
            <FilledButton>Go to link</FilledButton>
        </>
    )
}

export default ButtonScreen