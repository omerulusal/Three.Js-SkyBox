//----------------------->SKY BOX ORNEGI<-----------------------

let scene, camera, renderer, sound, volume;
function init() {
    scene = new THREE.Scene();//Sahne oluşturdum.
    camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 45, 30000);
    //Perspektif Kamera oluşturdum.
    camera.position.set(-900, -200, -900);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    //görüntü renderer.domElement nesnesi içinde saklanır ve sayfa içine eklenir.

    //*****-----*****-----*****YÖN KONRTOL*****-----*****----*****-----
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    //OrbitControls kameranın pozisyonunu ve açısını değiştirmesine olanak tanır. 
    controls.target.set(0, 0, 0);//Kamera yönü X Y Z ekseninde 0 noktasından başlar
    controls.update();//Kameranın her hareketinde güncellernir.
    controls.minDistance = 500;//kullanıcı kamerayı 500'den daha fazla yakınlaşamaz.
    controls.maxDistance = 1500;//kullanıcı kamerayı 1500'den daha fazla uzaklaştıramaz.
    //*****-----*****-----****YÖN KONRTOL SON****-----*****----*****-----


    let materialArray = [];
    let texture_ft = new THREE.TextureLoader().load('./sky/paze_ft.jpg');
    let texture_bk = new THREE.TextureLoader().load('./sky/paze_bk.jpg');
    let texture_up = new THREE.TextureLoader().load('./sky/paze_up.jpg');
    let texture_dn = new THREE.TextureLoader().load('./sky/paze_dn.jpg');
    let texture_rt = new THREE.TextureLoader().load('./sky/paze_rt.jpg');
    let texture_lf = new THREE.TextureLoader().load('./sky/paze_lf.jpg');

    materialArray.push(new THREE.MeshBasicMaterial({ map: texture_ft }));
    materialArray.push(new THREE.MeshBasicMaterial({ map: texture_bk }));
    materialArray.push(new THREE.MeshBasicMaterial({ map: texture_up }));
    materialArray.push(new THREE.MeshBasicMaterial({ map: texture_dn }));
    materialArray.push(new THREE.MeshBasicMaterial({ map: texture_rt }));
    materialArray.push(new THREE.MeshBasicMaterial({ map: texture_lf }));

    for (let i = 0; i < 6; i++) {
        materialArray[i].side = THREE.BackSide;
    }
    let skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000);
    //10000 m2 Küp oluşturup skyboxGeo ya atadım.
    let skybox = new THREE.Mesh(skyboxGeo, materialArray);
    scene.add(skybox);

    //*****-----*****-----*****ANİMASYON*****-----*****----*****-----
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();
}
init();