const si = require("systeminformation");

const systeminfo = async () => {
  const os = await si.osInfo();
  let myPlatform = os.platform;
  let platform_ver = os.distro;
  let myHostname = os.hostname;
  const cpu = await si.cpu();
  let cpuName = cpu.manufacturer + cpu.brand;
  let cpuCores = cpu.cores;
  let cpuSpeed = cpu.speed;
  const memory = await si.mem();
  let totalMemory = memory.total;
  let usedMemory = memory.used;
  let availMemory = memory.available;
  const graphics = await si.graphics();
  let graphic_card = graphics.controllers[0].model;
  /*
  let first_displayX = graphics.displays[0].resolutionX;
  let first_displayY = graphics.displays[0].resolutionY;
  let second_displayX = graphics.displays[1].resolutionX;
  let second_displayY = graphics.displays[1].resolutionY;
  */
  const disk = await si.diskLayout();
  let disk_name = [];
  let disk_type = [];
  let disk_size = []; //byte
  console.log(`
  운영체제 : ${myPlatform}
  운영체제 버전 : ${platform_ver}
  컴퓨터 HOSTNAME : ${myHostname}
  CPU_모델 : ${cpuName}
  CPU_코어수 : ${cpuCores}
  CPU_속도 : ${cpuSpeed}
  데스크톱 용량 : ${totalMemory}(byte)
  사용중인 용량 : ${usedMemory}(byte)  
  사용가능한 용량 : ${availMemory}(byte)
  그래픽 카드 : ${graphic_card}
  `);
  for (let i = 1; i < disk.length + 1; i++) {
    console.log(`
      디스크[${i}] 이름 : ${disk[i - 1].name}
      디스크[${i}] 타입 : ${disk[i - 1].type}
      디스크[${i}] 용량 : ${disk[i - 1].size}
    `);
  }
  console.log("========made by 배고프면 개발하는사람 ===========");

  while (true) {
    a = 1;
  }
};

systeminfo();
