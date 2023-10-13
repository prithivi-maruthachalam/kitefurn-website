import { navItemId as eaNav} from "./Eateries"
import { navItemId as stNav} from "./GlassStairs"
import { navItemId as hoNav} from "./Hotels"
import { navItemId as haNav} from "./Halls"
import { navItemId as ofNav} from "./Offices"
import { navItemId as reNav} from "./Retails"
import { navItemId as resNav} from "./Residence"

const navIds = {
    eateries: `/customInteriors#${eaNav}`,
    stairs: `/customInteriors#${stNav}`,
    hotels: `/customInteriors#${hoNav}`,
    halls: `/customInteriors#${haNav}`,
    offices: `/customInteriors#${ofNav}`,
    retails: `/customInteriors#${reNav}`,
    residences: `/customInteriors#${resNav}`
}


export default navIds