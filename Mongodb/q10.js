// Create a folder mongo-replica and sub folders data1 data2 and data3

// Open command prompt and start running servers on separate tabs

mongod -replSet rs1 -logpath "S:\mongo-replica\data1\1.log" --dbpath "S:\mongo-replica\data1" --port 27018

mongod -replSet rs1 -logpath "S:\mongo-replica\data2\2.log" --dbpath "S:\mongo-replica\data2" --port 27019

mongod -replSet rs1 -logpath "S:\mongo-replica\data3\3.log" --dbpath "S:\mongo-replica\data3" --port 27020

Follow these instructions to configure replica set:

mongosh --port 27018

rs.initiate({_id:"rs1",members:[{_id:0,host:"127.0.0.1:27018"},{_id:1,host:"127.0.0.1:27019"},{_id:2,host:"127.0.0.1:27020"}]})

rs.config()  //to check the config
rs.status()