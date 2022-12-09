/*Vendors*/
import './_normalize.sass';
import 'animate.css'
import 'bootstrap/dist/css/bootstrap.min.css';

require("./variables.scss");
require("./fonts.scss");
require("./sections.scss");
require("./icons.scss");
require("./styles.scss");

/*All components*/

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}
const modules = requireAll(require.context("./components", false, /.scss$/));
