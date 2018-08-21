import operationSidebar from '../../bvScenes/Operation/sidebar';
import marketBuildingSidebar from '../../bvScenes/MarketBuilding/sidebar';
import resourcesManagementSidebar from '../../bvScenes/ResourcesManagement/sidebar';
const options = [
  ...operationSidebar,
  ...marketBuildingSidebar,
  ...resourcesManagementSidebar
];
export default options;
