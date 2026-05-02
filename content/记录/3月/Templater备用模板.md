---
tags:
  - 记录
---
<%*
const TYPES = [
  "宏观经济学",
  "微观经济学",
  "TEST",
  "自定义"
];

/* ⭐ 给枚举加编号（仅用于显示） */
const display = TYPES.map((t, i) => `${i+1}. ${t}`);

/* 下拉选择 */
let type = await tp.system.suggester(display, TYPES);

/* ⭐ 如果按ESC -> 直接终止模板 */
if (!type) {
    new Notice("已取消创建"); // 可选提示
    return;
}

if (type === "自定义") {
    let custom = await tp.system.prompt("请输入自定义分类名称");

    if (!custom) {
        new Notice("未输入分类，已取消");
        return;
    }

    type = custom;
}
/* 自动文件名 */
let newName = tp.date.now("M月D日HH点mm分ss'");

/* metadata */
tR += `---\ntags: ${type}\n---`;

/* 文件夹 */
let folder = `${type}`;

if (!await tp.file.exists(folder)) {
    await app.vault.createFolder(folder);
}

await tp.file.move(`${folder}/${newName}`);
%>
