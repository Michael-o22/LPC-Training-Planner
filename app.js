const STORAGE_KEY = "uavSchedulePlanner:v1";
const RELATED_DOCS_LINK = "https://drive.google.com/drive/u/0/folders/1_OSMd1mtcZ_eDYtApQdmTUNoieZPvhku";
const FIRESTORE_COLLECTION = "uavTrainingPlanner";
const FIRESTORE_DOC = "sharedState";

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
  slotMeta: {},
  lastEditedBy: "",
  lastEditedAt: 0,
  courseBankCollapsed: false,
  courseBankActiveGroup: "1"
};

let state = loadState();
let draggedCourseId = null;
let firestoreDb = null;
let firestoreReady = false;
let authReady = false;
let applyingRemoteState = false;
let pendingRemoteSaveTimer = null;
let currentUser = null;
let lastRemoteSchedule = {};
let lastRemoteSlotMeta = {};
let remoteSnapshotSeen = false;
let localScheduleMutationUntil = 0;

const departmentInput = document.querySelector("#departmentInput");
const plannerGrid = document.querySelector("#plannerGrid");
const courseBankPanel = document.querySelector("#courseBankPanel");
const toggleCourseBankBtn = document.querySelector("#toggleCourseBankBtn");
const scheduleTable = document.querySelector("#scheduleTable");
const courseBoxList = document.querySelector("#courseBoxList");
const courseAdminList = document.querySelector("#courseAdminList");
const courseForm = document.querySelector("#courseForm");
const courseSearchInput = document.querySelector("#courseSearchInput");
const courseSearchBtn = document.querySelector("#courseSearchBtn");
const courseId = document.querySelector("#courseId");
const courseName = document.querySelector("#courseName");
const courseCode = document.querySelector("#courseCode");
const courseTeacher = document.querySelector("#courseTeacher");
const coursePresentationLink = document.querySelector("#coursePresentationLink");
const courseCount = document.querySelector("#courseCount");
const toast = document.querySelector("#toast");
const timeEditor = document.querySelector("#timeEditor");
const authStatus = document.querySelector("#authStatus");
const loginBtn = document.querySelector("#loginBtn");
const logoutBtn = document.querySelector("#logoutBtn");
const lessonTopicModal = document.querySelector("#lessonTopicModal");
const lessonTopicCourseName = document.querySelector("#lessonTopicCourseName");
const lessonTopicInput = document.querySelector("#lessonTopicInput");
const saveLessonTopicBtn = document.querySelector("#saveLessonTopicBtn");
const closeLessonTopicBtn = document.querySelector("#closeLessonTopicBtn");
const cancelLessonTopicBtn = document.querySelector("#cancelLessonTopicBtn");
let activeLessonTopicCourseId = "";
let courseSearchQuery = "";

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return buildState(defaultState);
    const normalized = normalizeCourses(Array.isArray(saved.courses) ? saved.courses : defaultCourses);
    const schedule = normalizeSchedule(
      saved.schedule && typeof saved.schedule === "object" ? saved.schedule : {},
      normalized.idMap
    );
    return {
      ...structuredClone(defaultState),
      ...saved,
      courses: normalized.courses,
      slots: Array.isArray(saved.slots) ? saved.slots : defaultSlots,
      schedule,
      slotMeta: saved.slotMeta && typeof saved.slotMeta === "object" ? saved.slotMeta : {},
      lastEditedBy: saved.lastEditedBy || "",
      lastEditedAt: saved.lastEditedAt || 0
    };
  } catch {
    return buildState(defaultState);
  }
}

function buildState(source) {
  const normalized = normalizeCourses(source.courses || defaultCourses);
  return {
    ...structuredClone(defaultState),
    ...source,
    courses: normalized.courses,
    schedule: normalizeSchedule(source.schedule || {}, normalized.idMap),
    slotMeta: source.slotMeta || {},
    lastEditedBy: source.lastEditedBy || "",
    lastEditedAt: source.lastEditedAt || 0
  };
}

function normalizeCourses(courses) {
  const idMap = {};
  const normalized = [];
  courses.forEach((course) => {
    const baseCourse = {
      ...course,
      presentationLink: course.presentationLink || presentationLinks[course.id] || "",
      lessonTopic: course.lessonTopic || ""
    };
    const topics = splitCourseTopics(baseCourse);
    topics.forEach((topic, index) => {
      normalized.push(topic);
      idMap[topic.id] = topic.id;
      if (index === 0) idMap[course.id] = topic.id;
    });
  });
  return { courses: normalized, idMap };
}

function normalizeSchedule(schedule, idMap) {
  return Object.fromEntries(
    Object.entries(schedule).map(([key, value]) => [key, idMap[value] || value])
  );
}

function saveState(options = {}) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  if (options.immediate) {
    saveRemoteState({ immediate: true });
    return;
  }
  queueRemoteSave();
}

function getSerializableState() {
  return {
    department: state.department,
    courses: state.courses,
    slots: state.slots,
    schedule: state.schedule,
    slotMeta: state.slotMeta || {},
    lastEditedBy: state.lastEditedBy || "",
    lastEditedAt: state.lastEditedAt || 0,
    courseBankCollapsed: state.courseBankCollapsed,
    courseBankActiveGroup: state.courseBankActiveGroup
  };
}

function queueRemoteSave() {
  if (!firestoreReady || applyingRemoteState) return;
  window.clearTimeout(pendingRemoteSaveTimer);
  pendingRemoteSaveTimer = window.setTimeout(saveRemoteState, 250);
}

async function saveRemoteState(options = {}) {
  if (!firestoreReady || !firestoreDb || !currentUser) return;
  if (options.immediate) {
    window.clearTimeout(pendingRemoteSaveTimer);
    localScheduleMutationUntil = Date.now() + 2500;
  }
  try {
    await firestoreDb.collection(FIRESTORE_COLLECTION).doc(FIRESTORE_DOC).set({
      state: getSerializableState(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  } catch (error) {
    console.error("Firestore save failed", error);
    const code = error?.code ? ` (${error.code})` : "";
    showToast(`บันทึกขึ้นฐานข้อมูลกลางไม่สำเร็จ${code}`);
  }
}

function isStaleScheduleSnapshot(remoteState) {
  if (Date.now() >= localScheduleMutationUntil) return false;
  const remoteSchedule = JSON.stringify(remoteState.schedule || {});
  const localSchedule = JSON.stringify(state.schedule || {});
  return remoteSchedule !== localSchedule;
}

function hasFirebaseConfig() {
  const config = window.UAV_FIREBASE_CONFIG;
  return Boolean(config?.apiKey && config?.projectId && config?.appId);
}

function getAllowedEmails() {
  return (window.UAV_ALLOWED_EMAILS || [])
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

function isAllowedUser(user) {
  const allowedEmails = getAllowedEmails();
  return !allowedEmails.length || allowedEmails.includes(user.email?.toLowerCase());
}

function getEditor() {
  return {
    name: currentUser?.displayName || currentUser?.email || "ผู้ใช้",
    email: currentUser?.email || "",
    uid: currentUser?.uid || ""
  };
}

function setLastEdited(slotKey = "") {
  const editor = getEditor();
  const now = Date.now();
  state.lastEditedBy = editor.name;
  state.lastEditedAt = now;
  if (slotKey) {
    state.slotMeta = {
      ...(state.slotMeta || {}),
      [slotKey]: {
        updatedBy: editor.name,
        updatedByEmail: editor.email,
        updatedAt: now
      }
    };
  }
}

function renderAuth(user) {
  if (!authStatus || !loginBtn || !logoutBtn) return;
  if (user) {
    authStatus.textContent = user.displayName || user.email;
    authStatus.classList.remove("hidden");
    loginBtn.classList.add("hidden");
    logoutBtn.classList.remove("hidden");
  } else {
    authStatus.textContent = "";
    authStatus.classList.add("hidden");
    loginBtn.classList.toggle("hidden", !hasFirebaseConfig());
    logoutBtn.classList.add("hidden");
  }
}

function initFirebaseSync() {
  if (!hasFirebaseConfig()) {
    console.info("Firebase config is empty. Using localStorage mode.");
    renderAuth(null);
    return;
  }
  if (!window.firebase?.initializeApp) {
    console.warn("Firebase SDK is not loaded. Using localStorage mode.");
    renderAuth(null);
    return;
  }

  try {
    firebase.initializeApp(window.UAV_FIREBASE_CONFIG);
    firestoreDb = firebase.firestore();
    firebase.auth().onAuthStateChanged(async (user) => {
      authReady = true;
      if (!user) {
        currentUser = null;
        firestoreReady = false;
        if (unsubscribeRemote) {
          unsubscribeRemote();
          unsubscribeRemote = null;
        }
        renderAuth(null);
        return;
      }
      if (!isAllowedUser(user)) {
        showToast("อีเมลนี้ไม่ได้รับสิทธิ์ใช้งานระบบ");
        await firebase.auth().signOut();
        return;
      }
      currentUser = user;
      firestoreReady = true;
      renderAuth(user);
      startFirestoreListener();
    });
  } catch (error) {
    console.error("Firebase init failed", error);
    firestoreReady = false;
    showToast("ตั้งค่า Firebase ไม่ถูกต้อง");
  }
}

let unsubscribeRemote = null;

function startFirestoreListener() {
  if (!firestoreDb || unsubscribeRemote) return;
  const sharedDoc = firestoreDb.collection(FIRESTORE_COLLECTION).doc(FIRESTORE_DOC);

  unsubscribeRemote = sharedDoc.onSnapshot(async (snapshot) => {
    if (!snapshot.exists) {
      await sharedDoc.set({
        state: getSerializableState(),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      showToast("สร้างฐานข้อมูลกลางเรียบร้อยแล้ว");
      return;
    }

    const remoteState = snapshot.data()?.state;
    if (!remoteState) return;
    if (!snapshot.metadata.hasPendingWrites && isStaleScheduleSnapshot(remoteState)) return;
    notifyRemoteScheduleChanges(remoteState);
    applyingRemoteState = true;
    const normalized = buildState({ ...state, ...remoteState });
    state = { ...state, ...normalized };
    lastRemoteSchedule = { ...(state.schedule || {}) };
    lastRemoteSlotMeta = { ...(state.slotMeta || {}) };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    render();
    applyingRemoteState = false;
  }, (error) => {
    console.error("Firestore sync failed", error);
    showToast("เชื่อมต่อฐานข้อมูลกลางไม่สำเร็จ");
  });
}

function notifyRemoteScheduleChanges(remoteState) {
  if (!currentUser) return;
  const remoteSchedule = remoteState.schedule || {};
  const remoteSlotMeta = remoteState.slotMeta || {};
  if (!remoteSnapshotSeen) {
    remoteSnapshotSeen = true;
    return;
  }
  const keys = new Set([
    ...Object.keys(lastRemoteSchedule || {}),
    ...Object.keys(remoteSchedule)
  ]);
  const changedByOthers = [...keys].filter((key) => {
    const changed = (lastRemoteSchedule || {})[key] !== remoteSchedule[key];
    const meta = remoteSlotMeta[key];
    return changed && meta?.updatedByEmail && meta.updatedByEmail !== currentUser.email;
  });
  if (changedByOthers.length) {
    const firstMeta = remoteSlotMeta[changedByOthers[0]];
    showToast(`ช่องนี้ถูกแก้โดย ${firstMeta.updatedBy || "คนอื่น"} เมื่อสักครู่`);
  }
}

function getUsedCourseIds() {
  return new Set(Object.values(state.schedule).filter(Boolean));
}

function splitCourseTopics(course) {
  const parts = course.name
    .split(/\s+\/\s+(?=\d+\.\d+)/)
    .map((part) => part.trim())
    .filter(Boolean);
  return (parts.length ? parts : [course.name]).map((name, index) => ({
    ...course,
    id: parts.length > 1 ? `${course.id}__topic-${index + 1}` : course.id,
    sourceCourseId: course.id,
    name
  }));
}

function getBankCourses() {
  return state.courses.flatMap(splitCourseTopics);
}

function getCourseGroup(course) {
  return course.name.match(/^(\d+)\./)?.[1] || "อื่นๆ";
}

function getGroupedBankCourses() {
  return getBankCourses().reduce((groups, course) => {
    const group = getCourseGroup(course);
    if (!groups[group]) groups[group] = [];
    groups[group].push(course);
    return groups;
  }, {});
}

function getCourse(courseIdValue) {
  return state.courses.find((course) => course.id === courseIdValue)
    || getBankCourses().find((course) => course.id === courseIdValue);
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
        if (!assignedCourse && state.slotMeta?.[key]) {
          cell.append(renderSlotMeta(key, true));
        }
        bindDropTarget(cell, key);
      }

      scheduleTable.append(cell);
    });
  }
}

function renderCourseBank() {
  courseBoxList.innerHTML = "";
  const groups = getGroupedBankCourses();
  const groupKeys = Object.keys(groups).sort((a, b) => (Number(a) || 999) - (Number(b) || 999));
  if (state.courseBankActiveGroup !== "all" && !groups[state.courseBankActiveGroup]) {
    state.courseBankActiveGroup = "all";
  }
  const allCourses = getBankCourses();
  const activeCourses = state.courseBankActiveGroup === "all"
    ? allCourses
    : groups[state.courseBankActiveGroup] || [];
  const totalTopics = groupKeys.reduce((total, key) => total + groups[key].length, 0);
  courseCount.textContent = `${totalTopics} หัวข้อ`;

  const folderPicker = document.createElement("label");
  folderPicker.className = "folder-picker";
  folderPicker.innerHTML = `<span>หมวดวิชา</span><select aria-label="เลือกหมวดวิชา"></select><small></small>`;
  const select = folderPicker.querySelector("select");
  const selectedCount = folderPicker.querySelector("small");
  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.textContent = `ทั้งหมด (${totalTopics} หัวข้อ)`;
  allOption.selected = state.courseBankActiveGroup === "all";
  select.append(allOption);
  groupKeys.forEach((key) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = `หมวด ${key} (${groups[key].length} หัวข้อ)`;
    option.selected = key === state.courseBankActiveGroup;
    select.append(option);
  });
  selectedCount.textContent = `${activeCourses.length} หัวข้อในหมวดนี้`;
  select.addEventListener("change", () => {
    state.courseBankActiveGroup = select.value;
    saveState();
    renderCourseBank();
  });
  courseBoxList.append(folderPicker);

  const topicList = document.createElement("div");
  topicList.className = "topic-list";
  activeCourses.forEach((course) => {
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
    topicList.append(card);
  });
  courseBoxList.append(topicList);
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
  const query = courseSearchQuery.trim().toLowerCase();
  const courses = query
    ? state.courses.filter((course) => [course.code, course.name, course.teacher]
      .join(" ")
      .toLowerCase()
      .includes(query))
    : state.courses;

  if (!courses.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "ไม่พบรายวิชาที่ค้นหา";
    courseAdminList.append(empty);
    return;
  }

  courses.forEach((course) => {
    const row = document.createElement("article");
    row.className = "admin-card";
    row.innerHTML = `
      <div>
        <div class="course-code"></div>
        <div class="course-name"></div>
        <div class="teacher-row">
          <div class="course-teacher"></div>
          <button class="topic-btn" type="button">หัวข้อการสอน</button>
        </div>
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
    row.querySelector(".topic-btn").addEventListener("click", () => openLessonTopicEditor(course.id));
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
  card.dataset.group = getCourseGroup(course);
  card.innerHTML = `
    <button class="info-btn" type="button" aria-label="ดูหัวข้อการสอน" title="ดูหัวข้อการสอน">i</button>
    <div class="course-code"></div>
    <div class="course-name"></div>
    <div class="course-teacher"></div>
  `;
  card.querySelector(".info-btn").addEventListener("click", (event) => {
    event.stopPropagation();
    openLessonTopicViewer(course.id);
  });
  card.querySelector(".course-code").textContent = course.code;
  card.querySelector(".course-name").textContent = course.name;
  card.querySelector(".course-teacher").textContent = course.teacher;
  return card;
}

function renderScheduledCard(course, key) {
  const card = document.createElement("article");
  card.className = "scheduled-card";
  card.dataset.group = getCourseGroup(course);
  card.innerHTML = `
    <button class="remove-slot" type="button" aria-label="ลบรายวิชาออกจากช่อง">×</button>
    <button class="info-btn" type="button" aria-label="ดูหัวข้อการสอน" title="ดูหัวข้อการสอน">i</button>
    <div class="course-code"></div>
    <div class="course-name"></div>
    <div class="course-teacher"></div>
    <div class="slot-meta"></div>
  `;
  card.querySelector(".info-btn").addEventListener("click", (event) => {
    event.stopPropagation();
    openLessonTopicViewer(course.id);
  });
  card.querySelector(".course-code").textContent = course.code;
  card.querySelector(".course-name").textContent = course.name;
  card.querySelector(".course-teacher").textContent = course.teacher;
  const meta = card.querySelector(".slot-meta");
  meta.textContent = getSlotMetaText(key);
  meta.classList.toggle("hidden", !meta.textContent);
  card.querySelector(".remove-slot").addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    delete state.schedule[key];
    setLastEdited(key);
    saveState({ immediate: true });
    render();
    showToast("ลบรายวิชาออกจากช่องตารางแล้ว");
  });
  return card;
}

function getSlotMetaText(key) {
  const meta = state.slotMeta?.[key];
  return meta?.updatedBy ? `แก้ไขล่าสุดโดย ${meta.updatedBy}` : "";
}

function renderSlotMeta(key, isEmpty = false) {
  const div = document.createElement("div");
  div.className = `slot-meta${isEmpty ? " empty" : ""}`;
  div.textContent = getSlotMetaText(key);
  return div;
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
  setLastEdited(key);
  saveState({ immediate: true });
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
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 5200);
}

function getAuthErrorMessage(error) {
  const code = error?.code || "unknown";
  const messages = {
    "auth/unauthorized-domain": "Login ไม่สำเร็จ: ยังไม่ได้เพิ่ม domain นี้ใน Firebase Authorized domains",
    "auth/operation-not-allowed": "Login ไม่สำเร็จ: ยังไม่ได้เปิด Google provider ใน Firebase Authentication",
    "auth/popup-blocked": "Login ไม่สำเร็จ: Browser บล็อก popup กรุณาอนุญาต popup แล้วลองใหม่",
    "auth/popup-closed-by-user": "Login ถูกยกเลิก: หน้าต่าง Google ถูกปิดก่อนเข้าสู่ระบบ",
    "auth/cancelled-popup-request": "Login ถูกยกเลิก: มี popup login เปิดซ้อนอยู่",
    "auth/network-request-failed": "Login ไม่สำเร็จ: ตรวจสอบอินเทอร์เน็ตหรือ Firebase connection"
  };
  return messages[code] || `Login ไม่สำเร็จ (${code})`;
}

function openLessonTopicEditor(id) {
  const course = getCourse(id);
  if (!course) return;
  activeLessonTopicCourseId = id;
  lessonTopicCourseName.textContent = `${course.code} • ${course.name}`;
  lessonTopicInput.value = course.lessonTopic || "";
  lessonTopicInput.readOnly = false;
  lessonTopicInput.placeholder = "เพิ่มรายละเอียดหัวข้อการสอน...";
  saveLessonTopicBtn.classList.remove("hidden");
  lessonTopicModal.classList.remove("hidden");
  lessonTopicInput.focus();
}

function openLessonTopicViewer(id) {
  const course = getCourse(id);
  if (!course) return;
  activeLessonTopicCourseId = "";
  lessonTopicCourseName.textContent = `${course.code} • ${course.name}`;
  lessonTopicInput.value = course.lessonTopic || "ยังไม่มีรายละเอียดหัวข้อการสอน";
  lessonTopicInput.readOnly = true;
  saveLessonTopicBtn.classList.add("hidden");
  lessonTopicModal.classList.remove("hidden");
}

function closeLessonTopicModal() {
  lessonTopicModal.classList.add("hidden");
  activeLessonTopicCourseId = "";
  lessonTopicInput.value = "";
  lessonTopicInput.readOnly = false;
  saveLessonTopicBtn.classList.remove("hidden");
}

function saveLessonTopic() {
  const course = getCourse(activeLessonTopicCourseId);
  if (!course) return;
  course.lessonTopic = lessonTopicInput.value.trim();
  saveState();
  render();
  closeLessonTopicModal();
  showToast("บันทึกหัวข้อการสอนแล้ว");
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
  state.slotMeta = {};
  setLastEdited();
  saveState({ immediate: true });
  render();
  showToast("รีเซ็ตตารางสอนเรียบร้อยแล้ว");
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

courseSearchBtn.addEventListener("click", () => {
  courseSearchQuery = courseSearchInput.value;
  renderCourseAdmin();
});

courseSearchInput.addEventListener("input", () => {
  courseSearchQuery = courseSearchInput.value;
  renderCourseAdmin();
});

document.querySelector("#presentationOverviewBtn")?.addEventListener("click", openFirstPresentationLink);
document.querySelector("#relatedDocsBtn").addEventListener("click", () => {
  showToast("เปิดเอกสารที่เกี่ยวข้องใน Google Drive แล้ว");
});

document.querySelector("#cancelCourseBtn").addEventListener("click", resetForm);
loginBtn.addEventListener("click", async () => {
  if (!window.firebase?.auth) return;
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
  } catch (error) {
    console.error("Google login failed", error);
    showToast(getAuthErrorMessage(error));
  }
});
logoutBtn.addEventListener("click", async () => {
  if (!window.firebase?.auth) return;
  await firebase.auth().signOut();
  currentUser = null;
  firestoreReady = false;
  renderAuth(null);
});
saveLessonTopicBtn.addEventListener("click", saveLessonTopic);
closeLessonTopicBtn.addEventListener("click", closeLessonTopicModal);
cancelLessonTopicBtn.addEventListener("click", closeLessonTopicModal);
lessonTopicModal.addEventListener("click", (event) => {
  if (event.target === lessonTopicModal) closeLessonTopicModal();
});

courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const existingCourse = getCourse(courseId.value);
  const payload = {
    id: courseId.value || `course-${Date.now()}`,
    name: courseName.value.trim(),
    code: courseCode.value.trim(),
    teacher: courseTeacher.value.trim(),
    presentationLink: coursePresentationLink.value.trim(),
    lessonTopic: existingCourse?.lessonTopic || ""
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

  const normalized = normalizeCourses(state.courses);
  state.courses = normalized.courses;
  state.schedule = normalizeSchedule(state.schedule, normalized.idMap);
  saveState();
  resetForm();
  render();
});

render();
initFirebaseSync();
