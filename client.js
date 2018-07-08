
let THREE = require('three');
let lib   = require('./lib');

let debug = function(msg) {
    console.log(`debug | ${msg}`);
};

var Client = {
    init() {
        debug("Client.init() | begin");
        Client.initUI();
        Client.initSystem();
        debug("Client.init() | end");

        Client.animate();
    },

    initUI() {
        debug("Client.initUI() | begin");
        Client.ui = {};
        let ui = Client.ui;

        // scene:
        ui.scene  = new THREE.Scene();
        ui.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 100);
        //ui.camera.up = new THREE.Vector3(0,1,0);
        //ui.camera.lookAt(new THREE.Vector3(1,1,1));
    
        // materials:
        ui.mats = {};
        ui.mats.normal = new THREE.MeshNormalMaterial();
        ui.mats.red    = new THREE.MeshLambertMaterial({color: 0xff0000});
        ui.mats.green  = new THREE.MeshLambertMaterial({color: 0x00ff00});
        ui.mats.blue   = new THREE.MeshLambertMaterial({color: 0x0000ff});

        // geometries:
        ui.shapes = {};
        ui.shapes.box = new THREE.BoxGeometry(1.0, 1.0, 1.0);

        // renderer:
        let margin  = {x:25, y:25};
        ui.renderer = new THREE.WebGLRenderer({antialias:true});
        ui.renderer.setSize(window.innerWidth-margin.x, window.innerHeight-margin.y);
        document.body.appendChild(ui.renderer.domElement);

        debug("Client.initUI() | end");
    },

    initSystem() {
        debug("Client.initSystem() | begin");
        Client.system = new lib.System();
        let system = Client.system;

        for (let i=0; i<100; i++) {
            let mesh     = new THREE.Mesh(Client.ui.shapes.box, Client.ui.mats.normal);
            let body     = new lib.Body(mesh);
            let position = lib.vec3h.random();
            body.mesh.position.set(position.x, position.y, position.z);
            Client.ui.scene.add(body.mesh);
            system.addBody(body);
        }
        debug("Client.initSystem() | end");
    },

    animate() {
        requestAnimationFrame(Client.animate);
        for (let i=0; i<Client.system.bodies.length; i++) {
            let body = Client.system.bodies[i];
            body.mesh.rotation.x += 0.005;
            body.mesh.rotation.y += 0.01;
        }
        Client.ui.camera.rotation.x += 0.005;
        Client.ui.camera.rotation.y += 0.01;
        Client.ui.renderer.render(Client.ui.scene, Client.ui.camera);
    }

};

