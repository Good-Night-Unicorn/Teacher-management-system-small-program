const menu = {
    list() {
        return [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"教师","menuJump":"列表","tableName":"jiaoshi"}],"menu":"教师管理"},{"child":[{"buttons":["查看","修改","删除","审核"],"menu":"请假信息","menuJump":"列表","tableName":"qingjiaxinxi"}],"menu":"请假信息管理"},{"child":[{"buttons":["查看","修改","删除","课程信息","课堂统计"],"menu":"个人认证","menuJump":"列表","tableName":"gerenrenzheng"}],"menu":"个人认证管理"},{"child":[{"buttons":["查看","修改","删除","课堂记录"],"menu":"课程信息","menuJump":"列表","tableName":"kechengxinxi"}],"menu":"课程信息管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"课堂记录","menuJump":"列表","tableName":"ketangjilu"}],"menu":"课堂记录管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"课堂统计","menuJump":"列表","tableName":"ketangtongji"}],"menu":"课堂统计管理"},{"child":[{"buttons":["查看","修改","回复","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"buttons":["新增","查看","修改","删除"],"menu":"公告信息","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看","课堂记录"],"menu":"课程信息列表","menuJump":"列表","tableName":"kechengxinxi"}],"menu":"课程信息模块"},{"child":[{"buttons":["查看"],"menu":"公告信息列表","tableName":"news"}],"menu":"公告信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"请假信息","menuJump":"列表","tableName":"qingjiaxinxi"}],"menu":"请假信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"个人认证","menuJump":"列表","tableName":"gerenrenzheng"}],"menu":"个人认证管理"},{"child":[{"buttons":["查看","删除","课堂记录"],"menu":"课程信息","menuJump":"列表","tableName":"kechengxinxi"}],"menu":"课程信息管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"课堂记录","menuJump":"列表","tableName":"ketangjilu"}],"menu":"课堂记录管理"},{"child":[{"buttons":["查看","删除"],"menu":"课堂统计","menuJump":"列表","tableName":"ketangtongji"}],"menu":"课堂统计管理"}],"frontMenu":[{"child":[{"buttons":["查看","课堂记录"],"menu":"课程信息列表","menuJump":"列表","tableName":"kechengxinxi"}],"menu":"课程信息模块"},{"child":[{"buttons":["查看"],"menu":"公告信息列表","tableName":"news"}],"menu":"公告信息模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"教师","tableName":"jiaoshi"}]
    }
}
export default menu;
