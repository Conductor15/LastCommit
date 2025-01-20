import styles from './PaperContent.module.css';
import ContentPics from '../contentPicsture/contentPic.jsx'
function PaperContent(){
    return (
        <div className={styles.paperContent}>
            <h1>Abstract</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h1>1. Lorem ipsum dolor sit amet</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h2>1.1 Lorem ipsum dolor sit amet</h2>
            <p>Semper pretium per mattis mollis netus orci eget diam. Habitant auctor volutpat risus; lectus litora ultrices natoque elit tempor. Enim phasellus faucibus habitant placerat felis. Semper nascetur consectetur bibendum; at blandit natoque lorem vivamus. Et venenatis platea; auctor aliquam fusce facilisis ac venenatis. Justo dui magna finibus nibh ex netus nostra volutpat. Lacus justo tempus hendrerit convallis rutrum venenatis varius hac. Habitasse nulla et turpis senectus mattis duis maecenas nisl.
            Elit iaculis justo tincidunt diam, vehicula enim. Dictum dictum tincidunt nisi ex malesuada sapien. Pharetra dolor rhoncus rutrum integer dui. Nullam mi iaculis cursus parturient et sem. Facilisi bibendum varius proin odio iaculis. Aarcu finibus maximus montes netus integer litora enim commodo. Torquent faucibus molestie praesent risus class augue per pulvinar. Erat ipsum augue condimentum dui proin lectus. Ante ipsum erat nisl senectus dis est elit phasellus. Sagittis ac ridiculus vulputate morbi conubia dui lacus.</p>
            <p>Morbi rhoncus sagittis tortor orci eleifend mattis suspendisse fusce magna. Praesent nascetur vestibulum non euismod nisi. Tempus finibus dui porta ultrices aenean vel. Imperdiet eget iaculis condimentum urna imperdiet platea ultrices convallis. Mi risus dui neque mi urna ridiculus auctor adipiscing. Efficitur elementum fusce fames, class vehicula condimentum fames. Etiam sollicitudin sollicitudin ut volutpat laoreet tincidunt convallis.</p>
            <ContentPics/>
            <p>Morbi rhoncus sagittis tortor orci eleifend mattis suspendisse fusce magna. Praesent nascetur vestibulum non euismod nisi. Tempus finibus dui porta ultrices aenean vel. Imperdiet eget iaculis condimentum urna imperdiet platea ultrices convallis. Mi risus dui neque mi urna ridiculus auctor adipiscing. Efficitur elementum fusce fames, class vehicula condimentum fames. Etiam sollicitudin sollicitudin ut volutpat laoreet tincidunt convallis.</p>
            

        </div>
    );
}
export default PaperContent;