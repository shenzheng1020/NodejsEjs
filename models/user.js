var mongoose = require("mongoose");	//	�������û����
var Schema = mongoose.Schema;	//	����ģ��
var userScheMa = new Schema({
    userid: String,
    password: String
});	//	������һ���µ�ģ�ͣ����Ǵ�ģʽ��δ��users�����й���
exports.user = mongoose.model('users', userScheMa); //	��users���Ϲ���