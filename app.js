const STORAGE_KEY = "uavSchedulePlanner:v1";
const RELATED_DOCS_LINK = "https://drive.google.com/drive/u/0/folders/1_OSMd1mtcZ_eDYtApQdmTUNoieZPvhku";

const presentationLinks = {
  "course-1": "https://drive.google.com/drive/folders/1clYATp4L_W-6-wlStMB3QscO96ObOFnK?usp=sharing",
  "course-2": "https://drive.google.com/drive/folders/1clYATp4L_W-6-wlStMB3QscO96ObOFnK?usp=sharing",
  "course-3": "https://drive.google.com/drive/folders/11XnwmyLsnrivuR48PhTcml9-ktHuQQtN?usp=sharing",
  "course-4": "https://drive.google.com/drive/folders/11XnwmyLsnrivuR48PhTcml9-ktHuQQtN?usp=sharing",
  "course-5": "https://drive.google.com/drive/folders/13O9Ar5etF1iKtXMR8xU-PHIIxyvyUfT1?usp=sharing",
  "course-6": "https://drive.google.com/drive/folders/13O9Ar5etF1iKtXMR8xU-PHIIxyvyUfT1?usp=sharing",
  "course-7": "https://drive.google.com/drive/folders/155puvrxURZgMfXBF5jmPEK4K8hAJi89M?usp=drive_link",
  "course-8": "https://drive.google.com/drive/folders/155puvrxURZgMfXBF5jmPEK4K8hAJi89M?usp=drive_link",
  "course-9": "https://drive.google.com/drive/folders/155puvrxURZgMfXBF5jmPEK4K8hAJi89M?usp=drive_link",
  "course-10": "https://drive.google.com/drive/folders/1HohIJHIK8ogR-1nsh6Texexh_5S4vvFb?usp=sharing",
  "course-11": "https://drive.google.com/drive/u/0/folders/1tojWd2NVU0wnPGMmFdi8Fk-4xD1CUdld",
  "course-12": "https://drive.google.com/drive/u/0/folders/1njG78UfNavtqtsjBz1uG0QKs-wtroPPE",
  "course-13": "https://drive.google.com/drive/u/0/folders/1pC66lDVETlSVmVQ_gTLj46PKu3sl9cZ-"
};

const defaultCourses = [
  {
    id: "course-1",
    code: "30109-2010",
    name: "1.1 กฎหมายคมนาคมและขนส่งทางอากาศที่เกี่ยวข้องกับอากาศยานขนาดเล็กไร้คนขับ",
    teacher: "ศูนย์ข้อมูลแผนที่รูปแปลงที่ดิน",
    presentationLink: presentationLinks["course-1"]
  },
  {
    id: "course-2",
    code: "30109-2010",
    name: "1.2 ข้อกำหนดการขึ้นทะเบียน และการขออนุญาตใช้งานอากาศยานไร้คนขับ / 1.3 จริยธรรมและความรับผิดชอบในการใช้อากาศยาน",
    teacher: "ศูนย์ข้อมูลแผนที่รูปแปลงที่ดิน",
    presentationLink: presentationLinks["course-2"]
  },
  {
    id: "course-3",
    code: "30109-2010",
    name: "2.1 ข้อบังคับและมาตรฐานความปลอดภัยในการใช้อากาศยานขนาดเล็กไร้คนขับ",
    teacher: "ศูนย์ข้อมูลแผนที่รูปแปลงที่ดิน",
    presentationLink: presentationLinks["course-3"]
  },
  {
    id: "course-4",
    code: "30109-2010",
    name: "2.2 ข้อจำกัดพื้นที่บิน และการปฏิบัติตามมาตรฐานการบิน / 2.3 การบริหารความเสี่ยง",
    teacher: "ศูนย์ข้อมูลแผนที่รูปแปลงที่ดิน",
    presentationLink: presentationLinks["course-4"]
  },
  {
    id: "course-5",
    code: "30109-2010",
    name: "3.1 ประเภทของอากาศยานขนาดเล็กไร้คนขับในงานสำรวจ / 3.2 ส่วนประกอบของอากาศยาน",
    teacher: "ศูนย์ข้อมูลแผนที่รูปแปลงที่ดิน",
    presentationLink: presentationLinks["course-5"]
  },
  {
    id: "course-6",
    code: "30109-2010",
    name: "3.3 ระบบควบคุมและระบบนำทาง / 3.4 ระบบกล้องและเซนเซอร์ที่ใช้ในงานสำรวจ",
    teacher: "ศูนย์ข้อมูลแผนที่รูปแปลงที่ดิน",
    presentationLink: presentationLinks["course-6"]
  },
  {
    id: "course-7",
    code: "30109-2010",
    name: "4.1 การเตรียมความพร้อมก่อนการบิน และการควบคุมอากาศยานไร้คนขับเบื้องต้น",
    teacher: "ศูนย์ข้อมูลแผนที่รูปแปลงที่ดิน",
    presentationLink: presentationLinks["course-7"]
  },
  {
    id: "course-8",
    code: "30109-2010",
    name: "4.2 การฝึกควบคุมอากาศยานไร้คนขับด้วยโปรแกรมจำลองการบิน (Simulator)",
    teacher: "ศูนย์ข้อมูลแผนที่รูปแปลงที่ดิน",
    presentationLink: presentationLinks["course-8"]
  },
  {
    id: "course-9",
    code: "30109-2010",
    name: "4.3 การวางแผนภารกิจบินสำรวจเบื้องต้น",
    teacher: "ศูนย์ข้อมูลแผนที่รูปแปลงที่ดิน",
    presentationLink: presentationLinks["course-9"]
  },
  {
    id: "course-10",
    code: "30109-2010",
    name: "5.1 การใช้งานโปรแกรมวางแผนการบินอัตโนมัติ / 5.2 การตั้งค่าภารกิจบินสำรวจพื้นที่",
    teacher: "ศูนย์ข้อมูลแผนที่รูปแปลงที่ดิน",
    presentationLink: presentationLinks["course-10"]
  },
  {
    id: "course-11",
    code: "30109-2010",
    name: "6.1 ปฏิบัติการขึ้นบินและควบคุมอากาศยาน / 6.2 ลงจอดอย่างปลอดภัย / 6.3 เก็บข้อมูลภาพถ่ายทางอากาศ",
    teacher: "ศูนย์ข้อมูลแผนที่รูปแปลงที่ดิน",
    presentationLink: presentationLinks["course-11"]
  },
  {
    id: "course-12",
    code: "30109-2010",
    name: "7.1 ตรวจสอบสภาพอากาศยาน / 7.2 บำรุงรักษาและจัดเก็บ / 7.3 วิเคราะห์และแก้ไขปัญหาเบื้องต้น",
    teacher: "ศูนย์ข้อมูลแผนที่รูปแปลงที่ดิน",
    presentationLink: presentationLinks["course-12"]
  },
  {
    id: "course-13",
    code: "30109-2010",
    name: "8.1 ประเมินผลปลายภาคเรียน",
    teacher: "ศูนย์ข้อมูลแผนที่รูปแปลงที่ดิน",
    presentationLink: presentationLinks["course-13"]
  }
];

const defaultSlots = [
  { id: "slot-1", label: "08:00 - 10:00" },
  { id: "slot-2", label: "10:00 - 12:00" },
  { id: "lunch", label: "12:00 - 13:00", lunch: true },
  { id: "slot-3", label: "13:00 - 15:00" },
  { id: "slot-4", label: "15:00 - 16:00" }
];

const defaultState = {
  department: "ทีมงาน UAV ศรท",
  courses: defaultCourses,
  slots: defaultSlots,
  schedule: {},
  courseBankCollapsed: false
};

let state = loadState();
let draggedCourseId = null;

const departmentInput = document.querySelector("#departmentInput");
const plannerGrid = document.querySelector("#plannerGrid");
const courseBankPanel = document.querySelector("#courseBankPanel");
const toggleCourseBankBtn = document.querySelector("#toggleCourseBankBtn");
const scheduleTable = document.querySelector("#scheduleTable");
const courseBoxList = document.querySelector("#courseBoxList");
const courseAdminList = document.querySelector("#courseAdminList");
const courseForm = document.querySelector("#courseForm");
const courseId = document.querySelector("#courseId");
const courseName = document.querySelector("#courseName");
const courseCode = document.querySelector("#courseCode");
const courseTeacher = document.querySelector("#courseTeacher");
const coursePresentationLink = document.querySelector("#coursePresentationLink");
const courseCount = document.querySelector("#courseCount");
const toast = document.querySelector("#toast");
const timeEditor = document.querySelector("#timeEditor");

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return structuredClone(defaultState);
    const mergedCourses = Array.isArray(saved.courses)
      ? saved.courses.map((course) => ({
        ...course,
        presentationLink: course.presentationLink || presentationLinks[course.id] || ""
      }))
      : defaultCourses;
    return {
      ...structuredClone(defaultState),
      ...saved,
      courses: mergedCourses,
      slots: Array.isArray(saved.slots) ? saved.slots : defaultSlots,
      schedule: saved.schedule && typeof saved.schedule === "object" ? saved.schedule : {}
    };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getUsedCourseIds() {
  return new Set(Object.values(state.schedule).filter(Boolean));
}

function getCourse(courseIdValue) {
  return state.courses.find((course) => course.id === courseIdValue);
}

function render() {
  departmentInput.value = state.department;
  renderSchedule();
  renderCourseBank();
  renderCourseAdmin();
  renderTimeEditor();
  renderCourseBankPanel();
}

function renderSchedule() {
  scheduleTable.innerHTML = "";
  const corner = createCell("header-cell cell", "วัน / เวลา");
  scheduleTable.append(corner);

  state.slots.forEach((slot) => {
    scheduleTable.append(createCell("header-cell cell", slot.label));
  });

  for (let day = 1; day <= 8; day += 1) {
    scheduleTable.append(createCell("day-cell cell", `วันที่ ${day}`));
    state.slots.forEach((slot) => {
      const key = `${day}:${slot.id}`;
      const cell = createCell(`${slot.lunch ? "lunch-cell" : "slot-cell"} cell`, "");
      cell.dataset.day = day;
      cell.dataset.slot = slot.id;

      if (slot.lunch) {
        cell.textContent = "พักกลางวัน";
      } else {
        const assignedCourse = getCourse(state.schedule[key]);
        if (assignedCourse) cell.append(renderScheduledCard(assignedCourse, key));
        bindDropTarget(cell, key);
      }

      scheduleTable.append(cell);
    });
  }
}

function renderCourseBank() {
  courseBoxList.innerHTML = "";
  courseCount.textContent = `${state.courses.length} รายวิชา`;

  state.courses.forEach((course) => {
    const card = renderCourseCard(course);
    card.draggable = true;
    card.addEventListener("dragstart", (event) => {
      draggedCourseId = course.id;
      event.dataTransfer.setData("text/plain", course.id);
      event.dataTransfer.effectAllowed = "copy";
    });
    card.addEventListener("dragend", () => {
      draggedCourseId = null;
    });
    courseBoxList.append(card);
  });
}

function renderCourseBankPanel() {
  const collapsed = Boolean(state.courseBankCollapsed);
  plannerGrid.classList.toggle("bank-collapsed", collapsed);
  courseBankPanel.classList.toggle("collapsed", collapsed);
  const actionLabel = collapsed ? "ดึง Box รายวิชาออก" : "พับเก็บ Box รายวิชา";
  toggleCourseBankBtn.textContent = collapsed ? "‹" : "›";
  toggleCourseBankBtn.setAttribute("aria-label", actionLabel);
  toggleCourseBankBtn.setAttribute("title", actionLabel);
  toggleCourseBankBtn.setAttribute("aria-expanded", String(!collapsed));
}

function renderCourseAdmin() {
  courseAdminList.innerHTML = "";

  state.courses.forEach((course) => {
    const row = document.createElement("article");
    row.className = "admin-card";
    row.innerHTML = `
      <div>
        <div class="course-code"></div>
        <div class="course-name"></div>
        <div class="course-teacher"></div>
      </div>
      <div class="admin-actions">
        <button class="mini-btn edit" type="button">แก้ไข</button>
        <button class="mini-btn drive-btn" type="button">ข้อมูลนำเสนอ</button>
        <button class="mini-btn delete" type="button">ลบ</button>
      </div>
    `;
    row.querySelector(".course-code").textContent = course.code;
    row.querySelector(".course-name").textContent = course.name;
    row.querySelector(".course-teacher").textContent = `ครูประจำวิชา: ${course.teacher}`;
    row.querySelector(".edit").addEventListener("click", () => startEdit(course.id));
    const driveButton = row.querySelector(".drive-btn");
    if (course.presentationLink) {
      driveButton.addEventListener("click", () => openPresentationLink(course.presentationLink));
    } else {
      driveButton.classList.add("disabled");
      driveButton.addEventListener("click", () => showToast("รายวิชานี้ยังไม่มีลิงก์ Google Drive"));
    }
    row.querySelector(".delete").addEventListener("click", () => deleteCourse(course.id));
    courseAdminList.append(row);
  });
}

function renderTimeEditor() {
  timeEditor.innerHTML = `
    <div class="section-title">
      <h2>แก้ไขช่วงเวลา</h2>
      <button id="saveTimesBtn" class="primary-btn" type="button">บันทึกเวลา</button>
    </div>
    <div class="time-grid"></div>
  `;
  const grid = timeEditor.querySelector(".time-grid");
  state.slots.forEach((slot) => {
    const label = document.createElement("label");
    label.className = "time-field";
    label.innerHTML = `<span>${slot.lunch ? "พักกลางวัน" : "คาบสอน"}</span><input data-slot-id="${slot.id}">`;
    label.querySelector("input").value = slot.label;
    grid.append(label);
  });
  timeEditor.querySelector("#saveTimesBtn").addEventListener("click", saveTimes);
}

function renderCourseCard(course) {
  const card = document.createElement("article");
  card.className = "course-card";
  card.dataset.courseId = course.id;
  card.innerHTML = `
    <div class="course-code"></div>
    <div class="course-name"></div>
    <div class="course-teacher"></div>
  `;
  card.querySelector(".course-code").textContent = course.code;
  card.querySelector(".course-name").textContent = course.name;
  card.querySelector(".course-teacher").textContent = course.teacher;
  return card;
}

function renderScheduledCard(course, key) {
  const card = document.createElement("article");
  card.className = "scheduled-card";
  card.innerHTML = `
    <button class="remove-slot" type="button" aria-label="ลบรายวิชาออกจากช่อง">×</button>
    <div class="course-code"></div>
    <div class="course-name"></div>
    <div class="course-teacher"></div>
  `;
  card.querySelector(".course-code").textContent = course.code;
  card.querySelector(".course-name").textContent = course.name;
  card.querySelector(".course-teacher").textContent = course.teacher;
  card.querySelector(".remove-slot").addEventListener("click", () => {
    delete state.schedule[key];
    saveState();
    render();
    showToast("ลบรายวิชาออกจากช่องตารางแล้ว");
  });
  return card;
}

function createCell(className, text) {
  const div = document.createElement("div");
  div.className = className;
  div.textContent = text;
  return div;
}

function bindDropTarget(cell, key) {
  cell.addEventListener("dragover", (event) => {
    event.preventDefault();
    cell.classList.add("drag-over");
  });
  cell.addEventListener("dragleave", () => {
    cell.classList.remove("drag-over");
  });
  cell.addEventListener("drop", (event) => {
    event.preventDefault();
    cell.classList.remove("drag-over");
    const droppedId = event.dataTransfer.getData("text/plain") || draggedCourseId;
    assignCourseToSlot(droppedId, key);
  });
}

function assignCourseToSlot(courseIdValue, key) {
  if (!getCourse(courseIdValue)) return;
  if (state.schedule[key]) {
    showToast("ช่องนี้มีรายวิชาแล้ว กรุณาลบก่อนวางใหม่");
    return;
  }
  state.schedule[key] = courseIdValue;
  saveState();
  render();
  showToast("เพิ่มรายวิชาลงตารางสอนแล้ว");
}

function startEdit(id) {
  const course = getCourse(id);
  if (!course) return;
  courseId.value = course.id;
  courseName.value = course.name;
  courseCode.value = course.code;
  courseTeacher.value = course.teacher;
  coursePresentationLink.value = course.presentationLink || "";
  courseForm.classList.remove("hidden");
  courseName.focus();
}

function resetForm() {
  courseId.value = "";
  courseName.value = "";
  courseCode.value = "";
  courseTeacher.value = "";
  coursePresentationLink.value = "";
  courseForm.classList.add("hidden");
}

function deleteCourse(id) {
  const used = getUsedCourseIds().has(id);
  state.courses = state.courses.filter((course) => course.id !== id);
  if (used) {
    Object.entries(state.schedule).forEach(([key, value]) => {
      if (value === id) delete state.schedule[key];
    });
  }
  saveState();
  resetForm();
  render();
  showToast("ลบข้อมูลรายวิชาแล้ว");
}

function saveTimes() {
  const inputs = [...timeEditor.querySelectorAll("input[data-slot-id]")];
  state.slots = state.slots.map((slot) => {
    const input = inputs.find((item) => item.dataset.slotId === slot.id);
    return { ...slot, label: input.value.trim() || slot.label };
  });
  saveState();
  render();
  showToast("บันทึกเวลาเรียบร้อยแล้ว");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2400);
}

function openPresentationLink(link) {
  if (!link) {
    showToast("ยังไม่มีลิงก์ Google Drive");
    return;
  }
  window.open(link, "_blank", "noopener,noreferrer");
  showToast("เปิดข้อมูลนำเสนอจาก Google Drive แล้ว");
}

function openFirstPresentationLink() {
  const firstLink = state.courses.find((course) => course.presentationLink)?.presentationLink;
  openPresentationLink(firstLink);
}

function openRelatedDocs() {
  window.open(RELATED_DOCS_LINK, "_blank", "noopener,noreferrer");
  showToast("เปิดเอกสารที่เกี่ยวข้องใน Google Drive แล้ว");
}

document.querySelectorAll(".tab-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll(".page").forEach((page) => page.classList.remove("active"));
    button.classList.add("active");
    document.querySelector(`#${button.dataset.page}`).classList.add("active");
  });
});

departmentInput.addEventListener("input", () => {
  state.department = departmentInput.value;
  saveState();
});

document.querySelector("#clearScheduleBtn").addEventListener("click", () => {
  state.schedule = {};
  saveState();
  render();
  showToast("ล้างตารางสอนเรียบร้อยแล้ว");
});

document.querySelector("#editTimesBtn").addEventListener("click", () => {
  timeEditor.classList.toggle("hidden");
});

toggleCourseBankBtn.addEventListener("click", () => {
  state.courseBankCollapsed = !state.courseBankCollapsed;
  saveState();
  renderCourseBankPanel();
});

document.querySelector("#addCourseBtn").addEventListener("click", () => {
  resetForm();
  courseForm.classList.remove("hidden");
  courseName.focus();
});

document.querySelector("#presentationOverviewBtn")?.addEventListener("click", openFirstPresentationLink);
document.querySelector("#relatedDocsBtn").addEventListener("click", () => {
  showToast("เปิดเอกสารที่เกี่ยวข้องใน Google Drive แล้ว");
});

document.querySelector("#cancelCourseBtn").addEventListener("click", resetForm);

courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const payload = {
    id: courseId.value || `course-${Date.now()}`,
    name: courseName.value.trim(),
    code: courseCode.value.trim(),
    teacher: courseTeacher.value.trim(),
    presentationLink: coursePresentationLink.value.trim()
  };

  if (!payload.name || !payload.code || !payload.teacher) {
    showToast("กรุณากรอกข้อมูลรายวิชาให้ครบ");
    return;
  }

  const index = state.courses.findIndex((course) => course.id === payload.id);
  if (index >= 0) {
    state.courses[index] = payload;
    showToast("แก้ไขข้อมูลรายวิชาแล้ว");
  } else {
    state.courses.push(payload);
    showToast("เพิ่มข้อมูลรายวิชาแล้ว");
  }

  saveState();
  resetForm();
  render();
});

render();
