'use strict';
//var siphost = '192.168.100.7';
//var siphost = '172.24.195.142';
//var sipwsurl = 'ws://' + siphost + ':8081';
var cur_call = null;
var confMan = null;
var verto = null;
var ringing = false;
var autocall = false;
var chatting_with = false;

// var taskPlayVoiceRinging;
// function playVoiceRinging() {
//     var audioRinging = document.getElementById('audioRinging');
//     audioRinging.play();
//     if (ringing) {
//         taskPlayVoiceRinging = setTimeout(function () {
//             playVoiceRinging();
//         }, 5000);
//     }
// }
// function stopVoiceRinging() {
//     var audioRinging = document.getElementById('audioRinging');
//     if (taskPlayVoiceRinging) {
//         clearTimeout(taskPlayVoiceRinging);
//     }
//     audioRinging.pause();
//     audioRinging.load();
// }

//----------外呼----------------//
function callout() {
    var caller = '83990044';
    var called = $("#tel").val();
    sip_callout(caller, called);
}

function transfer() {
    var target = $("#transfertarget").val();
    sip_transfer(target);
}


//--------呼入回调函数-------------//
function cb_callin(caller, called, guid, type) {
    console.log('caller:' + caller);
    console.log('called:' + called);
    console.log('guid:' + guid);
    console.log('type:' + type);

    Ext.ComponentQuery.query('dial')[0].getController().callin(caller, called, guid, type);


}


//--------呼叫结算回调函数-------------//
function cb_callend() {
    console.log('-----------call end-------------');
    //显示外呼按钮
    // Ext.ComponentQuery.query('dial')[0].getController().setBtnCalloutDisabled(false);

    // Ext.ComponentQuery.query('dial')[0].getViewModel().set('callinDisable', false);
    // Ext.ComponentQuery.query('dial')[0].getViewModel().set('calloutDisable', false);
    // Ext.ComponentQuery.query('dial')[0].getViewModel().set('callToolsDisable', true);
    // Ext.ComponentQuery.query('#tbCallCenterOperate>#toggleHold')[0].setText('静音');

    // //取消屏蔽呼叫坐席
    // var editorComm = Ext.ComponentQuery.query('communicate_session>panel>htmleditor');
    // if (editorComm.length > 0) {
    //     for (var i = 0; i < editorComm.length; i++) {
    //         editorComm[i].getToolbar().query('#itemIdSessionCallout')[0].setDisabled(false);
    //     }
    // }
    // //取消屏蔽 留言处理-外呼
    // var mesCallout = Ext.ComponentQuery.query('#fcMesMobi>#callout');
    // if (mesCallout.length > 0) {
    //     mesCallout[0].setDisabled(false);
    // }

    // //删除对应的浏览器消息提醒
    // Ext.ComponentQuery.query('dial')[0].getController().removeNotif('语音呼入');
    // Ext.Msg.hide();

    // if (callOperateType === 1) {
    //     showAllCallTime();//计算总时长

    //     //浏览器消息提醒notification ：已挂机
    //     var mobile = '';
    //     var vModel = Ext.ComponentQuery.query('dial')[0].getViewModel(),
    //         callType = vModel.get('callType');
    //     if (callType == 1) {//呼入
    //         mobile = Ext.ComponentQuery.query('dial>#callin>#caller')[0].getValue();
    //     } else if (callType == 2) {//呼出
    //         mobile = Ext.ComponentQuery.query('dial>#callout>panel>#called')[0].getValue();
    //     }
    //     if (mobile != '') {
    //         playMusicCommon('sound/onhook.wav');
    //         client.showBroswerNotice('信息提示', mobile + '号码已挂机', 'image/phone_off.png', '挂机提示');
    //         setTimeout(function () {
    //             var notif = client.getNotifByTag('挂机提示');
    //             if (notif) {
    //                 client.removeNotif('挂机提示');
    //                 notif.notif.close();
    //             }
    //         }, 3000);
    //     }



    //     //刷新呼叫记录
    //     // setTimeout(function () {
    //     //     server_mgw(this, '15005', { type: 1 });
    //     //     server_mgw(this, '15005', { type: 2 });
    //     // }, 5000);

    // } else if (callOperateType === 2) {//坐席通话
    //     var communicateChat = Ext.getCmp('idCommunicateChat');
    //     if (communicateChat && communicateChat.getActiveTab()) {
    //         communicateChat.getActiveTab().down('htmleditor').down('[itemId=itemIdSessionCallout]').setDisabled(false);
    //         //communicateChat.getActiveTab().down('htmleditor').down('[itemId=displayTip]').setValue('已挂机...');
    //         playMusicCommon('sound/onhook.wav');
    //         client.showBroswerNotice('信息提示', '工号 ' + communicateChat.getActiveTab().oper + ' 已挂机', 'image/phone_off.png', '挂机提示');
    //         setTimeout(function () {
    //             var notif = client.getNotifByTag('挂机提示');
    //             if (notif) {
    //                 client.removeNotif('挂机提示');
    //                 notif.notif.close();
    //             }
    //         }, 3000);
    //     }
    // } else if (callOperateType === 3) {//监听
    //     playMusicCommon('sound/onhook.wav');
    //     client.showBroswerNotice('信息提示', '已取消监听', 'image/phone_off.png', '挂机提示');
    //     setTimeout(function () {
    //         var notif = client.getNotifByTag('挂机提示');
    //         if (notif) {
    //             client.removeNotif('挂机提示');
    //             notif.notif.close();
    //         }
    //     }, 3000);
    // }

    // //显示主动营销外呼按钮
    // // var myworkmain = Ext.ComponentQuery.query('telsalemyworkmain')[0];
    // // if (myworkmain) {
    // //     myworkmain.getController().lookupReference('btnCallout').setDisabled(false);
    // // }

}


//---------登录回调函数--------------//
function cb_login(v, success) {
    console.log('---------------------登陆事件-----------------------');
    console.log(v);
    console.log('login:' + success);
    if (success === false) {
        console.log('登陆语音平台失败，请联系管理员。');
    } else {
        //语音注册
        //server_mgw('', '15001', { svrip: 'wss.163.cn' }, '');

    }
}


//---------退出回调函数--------------//
function cb_logout(v, success) {
    console.log('---------------------退出事件-----------------------');
    console.log(v);
    console.log("success:" + success);


}










//-------------登陆---------------------//
function sip_login(user, pwd) {
    console.log(user);
    console.log(pwd);
    if (verto) {
        verto.loginData({
            login: user,// + "@" + 'wss.163.cn',
            passwd: pwd
        });
        verto.login();
    }
    else {
        verto = new $.verto({
            login: user + "@" + 'wss.163.cn',
            passwd: pwd,
            socketUrl: 'wss://' + 'wss.163.cn' + ':8082',
            tag: "webcam",
            localTag: 'local_webcam',
            //ringFile: "sounds/bell_ring2.wav",
            videoParams: {
                "minWidth": 320,
                "minHeight": 240,
                "maxWidth": 320,
                "maxHeight": 240,
                "minFrameRate": 15,
                "vertoBestFrameRate": 30
            },
            audioParams: {
                googAutoGainControl: false,
                googNoiseSuppression: false,
                googHighpassFilter: false
            }
            //iceServers: Ext.isIE ? true : false
        }, callbacks);
    }
}


//-------------退出-----------------//
function sip_logout() {
    if (verto) {
        if (cur_call) {
            verto.hangup();
            cur_call = null;
        }
        verto.logout();
        verto = null;
    }
}

//-------------外呼-------------------------//
function sip_callout(caller, called) {
    console.log(caller);
    console.log(called);
    if (!verto) {
        return;
    }

    if (cur_call) {
        return;
    }

    cur_call = verto.newCall({
        destination_number: called,
        caller_id_name: caller,
        caller_id_number: caller,
        useVideo: true,
        useStereo: false
    });

    ////屏蔽外呼按钮
    //Ext.ComponentQuery.query('dial')[0].getController().setBtnCalloutDisabled(true);


    //Ext.ComponentQuery.query('dial')[0].getViewModel().set('callinDisable', true);
    //Ext.ComponentQuery.query('dial')[0].getViewModel().set('calloutDisable', false);
    //Ext.ComponentQuery.query('dial')[0].getViewModel().set('callToolsDisable', false);

}


//---------------挂机---------------------------------//
function sip_callend() {
    if (cur_call) {
        verto.hangup();
        cur_call = null;
    }

    //用户挂机时删除对应的浏览器消息提醒notification
    //Ext.ComponentQuery.query('dial')[0].getController().removeNotif('语音呼入');


}


//--------静音、呼叫保持/取消静音、取消呼叫保持-------//
function sip_hold() {
    if (cur_call) {
        cur_call.toggleHold();
    }
}


//-----------按键播放dtmf音--------------------------//
function sip_dtmf(key) {
    var i = parseInt(key);
    if (key === "#" || key === "*" || key === "0" || (i > 0 && i <= 9)) {
        if (cur_call) {
            cur_call.dtmf(key);
        }
    }
}


//-----------应答来电--------------------------//
function sip_answer(cname, cid) {
    if (cur_call) {
        cur_call.answer({
            useStereo: false,
            callee_id_name: cname,
            callee_id_number: cid,
        });



    }
}


//-----------转接电话--------------------------//
function sip_transfer(target) {
    if (cur_call) {
        if (target) {
            cur_call.transfer(target);
        }
    }
}


var callbacks = {

    onMessage: function (verto, dialog, msg, data) {

        switch (msg) {
            case $.verto.enum.message.pvtEvent:
                //            console.error("pvtEvent", data.pvtData);
                if (data.pvtData) {
                    switch (data.pvtData.action) {

                        case "conference-liveArray-part":
                            break;
                        case "conference-liveArray-join":
                            break;
                    }
                }
                break;
            case $.verto.enum.message.info:
                var body = data ? data.body : '';
                break;
            case $.verto.enum.message.display:
                break;
            default:
                break;
        }
    },

    onDialogState: function (d) {
        cur_call = d;

        if (d.state == $.verto.enum.state.ringing) {
            ringing = true;
            //playVoiceRinging();
        } else {
            ringing = false;
            //stopVoiceRinging();
        }

        switch (d.state) {
            case $.verto.enum.state.ringing:
                var callerStr = d.params.caller_id_number.split('#');
                console.log(callerStr);
                var caller = callerStr[0];
                var called = callerStr[1];
                var guid = callerStr[2];
                var type = callerStr[3];
                cb_callin(caller, called, guid, type);

                // if (callOperateType === 1) {
                //     startTaskCallWaitingTimer();//等待时长计时
                // }
                break;

            case $.verto.enum.state.trying:
                // if (callOperateType === 1) {
                //     startTaskCallWaitingTimer();//等待时长计时
                // } else if (callOperateType === 2) {//坐席通话
                //     var communicateChat = Ext.getCmp('idCommunicateChat');
                //     if (communicateChat && communicateChat.getActiveTab()) {
                //         //communicateChat.getActiveTab().down('htmleditor').down('[itemId=displayTip]').setValue('接通中...');
                //         communicateChat.getActiveTab().down('htmleditor').down('[itemId=itemIdSessionCallout]').setDisabled(true);
                //     }
                // }
                break;
            case $.verto.enum.state.early:
                break;
            case $.verto.enum.state.active:
                // if (callOperateType === 1) {
                //     showCallTimerWindow();//计时器
                //     stopTaskCallWaitingTimer();//等待时长计时-关闭

                //     //浏览器消息提醒notification ：已接通
                //     var mobile = '';
                //     var vModel = Ext.ComponentQuery.query('dial')[0].getViewModel(),
                //         callType = vModel.get('callType');
                //     if (callType == 1) {//呼入
                //         mobile = Ext.ComponentQuery.query('dial>#callin>#caller')[0].getValue();
                //     } else if (callType == 2) {//呼出
                //         mobile = Ext.ComponentQuery.query('dial>#callout>panel>#called')[0].getValue();
                //     }
                //     if (mobile != '') {
                //         playMusicCommon('sound/answer.wav');
                //         client.showBroswerNotice('信息提示', mobile + '号码已接通', 'image/phone_on.png', '接通提示');
                //         setTimeout(function () {
                //             var notif = client.getNotifByTag('接通提示');
                //             if (notif) {
                //                 client.removeNotif('接通提示');
                //                 notif.notif.close();
                //             }
                //         }, 3000);
                //     }

                //     //主动营销
                //     var myworkmain = Ext.ComponentQuery.query('telsalemyworkmain')[0];
                //     if (myworkmain) {
                //         myworkmain.getController().getViewModel().set('answeredFlag', 1);
                //     }
                // } else if (callOperateType === 2) {//坐席通话
                //     var communicateChat = Ext.getCmp('idCommunicateChat');
                //     if (communicateChat && communicateChat.getActiveTab()) {
                //         //communicateChat.getActiveTab().down('htmleditor').down('[itemId=displayTip]').setValue('已接通');
                //         playMusicCommon('sound/answer.wav');
                //         client.showBroswerNotice('信息提示', '工号 ' + communicateChat.getActiveTab().oper + ' 已接通', 'image/phone_on.png', '接通提示');
                //         setTimeout(function () {
                //             var notif = client.getNotifByTag('接通提示');
                //             if (notif) {
                //                 client.removeNotif('接通提示');
                //                 notif.notif.close();
                //             }
                //         }, 3000);
                //     }
                // } else if (callOperateType === 3) {//监听
                //     playMusicCommon('sound/answer.wav');
                //     client.showBroswerNotice('信息提示', '已监听工号：' + callCenterMonitorOper, 'image/phone_on.png', '接通提示');
                //     setTimeout(function () {
                //         var notif = client.getNotifByTag('接通提示');
                //         if (notif) {
                //             client.removeNotif('接通提示');
                //             notif.notif.close();
                //         }
                //     }, 3000);
                // }
                break;
            case $.verto.enum.state.hangup:
                break;
            case $.verto.enum.state.destroy:
                cb_callend();
                cur_call = null;
                //stopTaskCallWaitingTimer();//等待时长计时-关闭
                break;
            case $.verto.enum.state.held:
                break;
            default:
                break;
        }
    },
    onWSLogin: function (v, success) {
        cur_call = null;
        ringing = false;
        cb_login(v, success);
    },

    onWSClose: function (v, success) {
        cb_logout(v, success);
    },

    onEvent: function (v, e) {
        console.debug("GOT EVENT", e);
    },
};