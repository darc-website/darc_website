"use client";

import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import Link from "next/link";
import { FaArrowLeft, FaSignOutAlt, FaKey, FaEdit } from "react-icons/fa";
import { HiRefresh } from "react-icons/hi";
import { FaDeleteLeft } from "react-icons/fa6";
import { AiOutlineFileAdd } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { Password } from "primereact/password";
import { FloatLabel } from "primereact/floatlabel";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import styles from "./dashboard.module.css";
import MemoEditor from "../../../../components/memo";
import NoticeAdmin from "../../../../components/NoticeAdmin";
import ArchiveAdmin from "../../../../components/ArchiveAdmin";

export default function Dashboard() {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false); // For review popup
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState(null);
  const [globalError, setGlobalError] = useState(null);

  const [selectedSection, setSelectedSection] = useState("경험담");
  const [videoUrl, setVideoUrl] = useState("");
  const [name, setName] = useState(""); // New state for the video name
  const [job, setJob] = useState(""); // New state for the review job
  const [text, setText] = useState(""); // New state for the review text
  const [reviews, setReviews] = useState([]); // State for reviews
  const [videos, setVideos] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [editingId, setEditingId] = useState(null); // State to track which review or video is being edited
  const [newName, setNewName] = useState(""); // State to track the new name during editing
  const [newText, setNewText] = useState(""); // State to track the new text during editing
  const [newJob, setNewJob] = useState(""); // State to track the new job during editing
  const [selectedReview, setSelectedReview] = useState(null);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [filterOption, setFilterOption] = useState("모두");
  const [filterOption2, setFilterOption2] = useState("모두");
  const [checkedCount, setCheckedCount] = useState(0);

  const router = useRouter();

  useEffect(() => {
    const authToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("authToken="));
    if (!authToken) {
      router.push("/admin");
    } else {
      fetchVideos().catch((error) => setGlobalError("Failed to fetch videos."));
      fetchReviews().catch((error) =>
        setGlobalError("Failed to fetch reviews.")
      );
    }
  }, [router]);

  const fetchVideos = async () => {
    try {
      const response = await fetch("/api/youtube-videos");
      const data = await response.json();
      if (response.ok) {
        const sortedVideos = data.videos.sort(
          (a, b) => new Date(b.storedDate) - new Date(a.storedDate)
        );
        setVideos(sortedVideos);
      } else {
        console.error("Failed to fetch videos");
        setGlobalError("비디오를 불러오는 데에 오류가 발생했습니다.");
      }
    } catch (error) {
      console.error("Error fetching videos:", error);
      setGlobalError("비디오를 불러오는 데에 오류가 발생했습니다.");
    }
  };

  const fetchReviews = async () => {
    try {
      const response = await fetch("/api/reviews");
      const data = await response.json();
      if (response.ok) {
        const sortedReviews = data.reviews.sort(
          (a, b) => new Date(b.storedDate) - new Date(a.storedDate)
        );
        setReviews(sortedReviews);
      } else {
        console.error("Failed to fetch reviews");
        setGlobalError("리뷰를 불러오는 데에 오류가 발생했습니다.");
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
      setGlobalError("리뷰를 불러오는 데에 오류가 발생했습니다.");
    }
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);

    const mainContentElement = document.querySelector(`.${styles.mainContent}`);
    if (mainContentElement) {
      mainContentElement.scrollTo({ top: 0, behavior: "smooth" });
    }

    await fetchVideos();
    await fetchReviews();
    setIsRefreshing(false);
  };

  const handleLogout = () => {
    document.cookie = `authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
    router.push("/admin");
    window.location.reload(); // 추가적으로 페이지 새로고침
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ oldPassword, newPassword }),
      });
      const data = await response.json();
      if (response.ok) {
        alert("비밀번호가 성공적으로 변경되었습니다.");
        setShowPasswordModal(false);
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError("비밀번호 변경 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const togglePasswordModal = () => {
    setShowPasswordModal(!showPasswordModal);
    setError(null);
  };

  const toggleReviewModal = () => {
    setShowReviewModal(!showReviewModal);
    setError(null);
  };

  const handleVideoSubmit = async (e) => {
    e.preventDefault();
    if (!videoUrl || !name) return;

    try {
      const response = await fetch("/api/youtube-videos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ videoUrl, name }),
      });
      const data = await response.json();
      if (response.ok) {
        setVideos([...videos, data.video]);
        setVideoUrl("");
        setName("");

        await fetchVideos();
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error("Error adding video:", error);
    }
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (!name || !job || !text) return;

    console.log("starting the request");

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, job, text }),
      });
      const data = await response.json();
      if (response.ok) {
        setReviews([...reviews, data.review]);
        setName("");
        setJob("");
        setText("");
        setShowReviewModal(false);

        await fetchReviews();
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  const handleDeleteReview = async (id, event) => {
    event.stopPropagation(); // Stop event propagation
    try {
      const response = await fetch(`/api/reviews/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setReviews(reviews.filter((review) => review._id !== id));
      } else {
        console.error("Error deleting review");
      }
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  const handleDeleteVideo = async (id, event) => {
    try {
      const response = await fetch(`/api/youtube-videos/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setVideos(videos.filter((video) => video._id !== id));
      } else {
        console.error("Error deleting video");
      }
    } catch (error) {
      console.error("Error deleting video:", error);
      setGlobalError("비디오를 불러오는 데에 오류가 발생했습니다.");
    }
  };

  const handleSectionSelect = (section) => {
    setSelectedSection(section);
  };

  // Function to handle edit for videos
  const handleEditVideo = (id, currentName, event) => {
    setEditingId(id);
    setNewName(currentName);
    setNewText(""); // Clear review-related fields
    setNewJob(""); // Clear review-related fields
  };

  // Function to handle edit for reviews
  const handleEditReview = (
    id,
    currentName,
    currentText,
    currentJob,
    event
  ) => {
    event.stopPropagation(); // Stop event propagation
    setEditingId(id);
    setNewName(currentName);
    setNewText(currentText);
    setNewJob(currentJob);
  };

  const handleSaveEditVideo = async (id) => {
    try {
      const response = await fetch(`/api/youtube-videos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: newName }),
      });
      const data = await response.json();
      if (response.ok) {
        setVideos(
          videos.map((video) =>
            video._id === id ? { ...video, name: newName } : video
          )
        );
        setEditingId(null);
        setNewName("");
      } else {
        console.error(data.error);
        setGlobalError(data.error);
      }
    } catch (error) {
      console.error("Error updating video:", error);
      setGlobalError("데이터를 업데이트하는 데에 오류가 발생했습니다.");
    }
  };

  const handleSaveEditReview = async (id) => {
    try {
      const response = await fetch(`/api/reviews/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: newName, text: newText, job: newJob }),
      });
      const data = await response.json();
      if (response.ok) {
        setReviews(
          reviews.map((review) =>
            review._id === id
              ? { ...review, name: newName, text: newText, job: newJob }
              : review
          )
        );
        setEditingId(null);
        setNewName("");
        setNewText("");
        setNewJob("");
      } else {
        console.error(data.error);
        setGlobalError(data.error);
      }
    } catch (error) {
      console.error("Error updating review:", error);
      setGlobalError("데이터를 업데이트하는 데에 오류가 발생했습니다.");
    }
  };

  const extractVideoId = (url) => {
    const urlObj = new URL(url);
    if (urlObj.hostname === "www.youtube.com") {
      return urlObj.searchParams.get("v");
    } else if (urlObj.hostname === "youtu.be") {
      return urlObj.pathname.slice(1);
    }
    return null;
  };

  const openReviewModal = (review) => {
    setSelectedReview(review);
    setIsReviewModalOpen(true);
  };

  const closeReviewModal = () => {
    setSelectedReview(null);
    setIsReviewModalOpen(false);
  };

  const filterVideos = () => {
    const now = new Date();
    let filteredVideos = videos;

    if (filterOption === "오늘") {
      filteredVideos = videos.filter((video) => {
        const videoDate = new Date(video.storedDate);
        return videoDate.toDateString() === now.toDateString();
      });
    } else if (filterOption === "이번주") {
      const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
      filteredVideos = videos.filter((video) => {
        const videoDate = new Date(video.storedDate);
        return videoDate >= startOfWeek;
      });
    } else if (filterOption === "이번달") {
      const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      filteredVideos = videos.filter((video) => {
        const videoDate = new Date(video.storedDate);
        return videoDate >= startOfMonth;
      });
    } else if (filterOption === "3달이내") {
      const threeMonthsAgo = new Date(now.setMonth(now.getMonth() - 3));
      filteredVideos = videos.filter((video) => {
        const videoDate = new Date(video.storedDate);
        return videoDate >= threeMonthsAgo;
      });
    } else if (filterOption === "6달이내") {
      const sixMonthsAgo = new Date(now.setMonth(now.getMonth() - 6));
      filteredVideos = videos.filter((video) => {
        const videoDate = new Date(video.storedDate);
        return videoDate >= sixMonthsAgo;
      });
    }
    return filteredVideos;
  };

  const filterReviews = () => {
    const now = new Date();
    let filteredReviews = reviews;

    if (filterOption2 === "오늘") {
      filteredReviews = reviews.filter((review) => {
        const reviewDate = new Date(review.storedDate);
        return reviewDate.toDateString() === now.toDateString();
      });
    } else if (filterOption2 === "이번주") {
      const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
      filteredReviews = reviews.filter((review) => {
        const reviewDate = new Date(review.storedDate);
        return reviewDate >= startOfWeek;
      });
    } else if (filterOption2 === "이번달") {
      const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      filteredReviews = reviews.filter((review) => {
        const reviewDate = new Date(review.storedDate);
        return reviewDate >= startOfMonth;
      });
    } else if (filterOption2 === "3달이내") {
      const threeMonthsAgo = new Date(now.setMonth(now.getMonth() - 3));
      filteredReviews = reviews.filter((review) => {
        const reviewDate = new Date(review.storedDate);
        return reviewDate >= threeMonthsAgo;
      });
    } else if (filterOption2 === "6달이내") {
      const sixMonthsAgo = new Date(now.setMonth(now.getMonth() - 6));
      filteredReviews = reviews.filter((review) => {
        const reviewDate = new Date(review.storedDate);
        return reviewDate >= sixMonthsAgo;
      });
    }
    return filteredReviews;
  };

  useEffect(() => {
    setCheckedCount(reviews.filter((review) => review.checked).length);
  }, [reviews]);

  const handleCheckboxChange = async (id, checked) => {
    try {
      // If the item is being unchecked or the number of currently checked items is less than 3, allow the change
      if (checked || checkedCount < 3) {
        const response = await fetch(`/api/reviews/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ checked: !checked }), // Toggle the checked state
        });

        if (response.ok) {
          // Update the reviews state and the checkedCount based on the user interaction
          setReviews((prevReviews) =>
            prevReviews.map((review) =>
              review._id === id ? { ...review, checked: !checked } : review
            )
          );

          // Update the checkedCount based on whether the item was checked or unchecked
          setCheckedCount((prevCount) =>
            checked ? prevCount - 1 : prevCount + 1
          );
        } else {
          console.error("Error updating checkbox state");
        }
      }
    } catch (error) {
      console.error("Error updating checkbox state:", error);
    }
  };

  return (
    <div className={styles.dashboard}>
      <aside className={styles.sidebar}>
        <img
          src="https://i.imgur.com/7gFZudZ.png"
          alt="logo"
          style={{ width: "150px" }}
          className={styles.logo}
        />
        <h1 className={styles.adminTitle}>관리자 페이지</h1>

        <button
          className={`${styles.sidebarLink} ${
            selectedSection === "경험담" ? styles.active : ""
          }`}
          onClick={() => handleSectionSelect("경험담")}
        >
          경험담
        </button>
        <button
          className={`${styles.sidebarLink} ${
            selectedSection === "회복수기" ? styles.active : ""
          }`}
          onClick={() => handleSectionSelect("회복수기")}
        >
          추천서
        </button>
        <button
          className={`${styles.sidebarLink} ${
            selectedSection === "시간표" ? styles.active : ""
          }`}
          onClick={() => handleSectionSelect("시간표")}
        >
          관리자 메모
        </button>
        <button
          className={`${styles.sidebarLink} ${
            selectedSection === "공지사항" ? styles.active : ""
          }`}
          onClick={() => handleSectionSelect("공지사항")}
        >
          공지사항
        </button>
        <button
          className={`${styles.sidebarLink} ${
            selectedSection === "자료실" ? styles.active : ""
          }`}
          onClick={() => handleSectionSelect("자료실")}
        >
          자료실
        </button>

        <Link href="/" className={styles.backLink}>
          <button className={styles.backButton}>
            <FaArrowLeft /> &nbsp; 홈 돌아가기
          </button>
        </Link>

        <button className={styles.backButton} onClick={handleLogout}>
          <FaSignOutAlt /> &nbsp; 로그아웃
        </button>
      </aside>

      <nav className={styles.navbar}>
        <div className={styles.navTitle}>👋 관리자님, 환영합니다</div>
        <button
          className={styles.changePasswordButton}
          onClick={togglePasswordModal}
        >
          <FaKey /> &nbsp; 비밀번호 변경
        </button>
      </nav>

      <main className={styles.mainContent}>
        {selectedSection === "경험담" && (
          <>
            <div className={styles.videoSectionHeader}>
              <form onSubmit={handleVideoSubmit}>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Video Name"
                  className={styles.input}
                />
                <input
                  type="text"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  placeholder="YouTube video URL"
                  className={styles.input}
                />
                <button type="submit" className={styles.submitButton}>
                  추가
                </button>
              </form>

              <div className={styles.rightAlignedControls}>
                <select
                  value={filterOption}
                  onChange={(e) => setFilterOption(e.target.value)}
                  className={styles.filterDropdown}
                >
                  <option value="모두">모두</option>
                  <option value="오늘">오늘</option>
                  <option value="이번주">이번 주</option>
                  <option value="이번달">이번 달</option>
                  <option value="3달이내">3달 이내</option>
                  <option value="6달이내">6달 이내</option>
                </select>

                <button
                  className={styles.refreshButton}
                  onClick={handleRefresh}
                >
                  <HiRefresh className={isRefreshing ? styles.spinning : ""} />{" "}
                  &nbsp; 새로고침
                </button>
              </div>
            </div>
            {/* Form and other elements */}
            {globalError && (
              <div className={styles.errorMessage}>{globalError}</div>
            )}

            <div className={styles.videoList}>
              {filterVideos().map((video) => {
                const videoDate = new Date(video.storedDate);
                const today = new Date();
                const isToday =
                  videoDate.toDateString() === today.toDateString();
                const formattedDate = isToday
                  ? videoDate.toLocaleString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })
                  : videoDate.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    });

                return (
                  <div key={video._id} className={styles.videoItem}>
                    <div className={styles.videoContainer}>
                      <YouTube videoId={extractVideoId(video.videoUrl)} />
                    </div>
                    <div className={styles.videoDetails}>
                      <div className={styles.videoNameRow}>
                        <span className={styles.videoName}>{video.name}</span>
                      </div>
                      <div className={styles.buttonRow1}>
                        <span className={styles.videoDate}>
                          {formattedDate}
                        </span>
                        {editingId === video._id ? (
                          <>
                            <input
                              type="text"
                              value={newName}
                              onChange={(e) => setNewName(e.target.value)}
                              className={styles.inputnew}
                            />
                            <button
                              onClick={() => handleSaveEditVideo(video._id)}
                              className={styles.saveButton}
                            >
                              저장
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              onClick={() =>
                                handleEditVideo(video._id, video.name)
                              }
                              className={styles.editButton}
                            >
                              <FaEdit /> &nbsp; 수정
                            </button>
                            <button
                              onClick={() => handleDeleteVideo(video._id)}
                              className={styles.deleteButton}
                            >
                              <FaDeleteLeft /> &nbsp; 삭제
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {selectedSection === "회복수기" && (
          <>
            <div className={styles.reviewSectionHeader}>
              <div className={styles.leftAlignedControls}>
                <button
                  onClick={toggleReviewModal}
                  className={styles.addButton}
                >
                  <AiOutlineFileAdd /> &nbsp; 추가
                </button>
                <p>
                  체크표시가 된 항목은 최신순부터 홈 화면에 표시되며 총 3개까지
                  표시가능
                </p>
              </div>

              <div className={styles.rightAlignedControls}>
                <select
                  value={filterOption2}
                  onChange={(e) => setFilterOption2(e.target.value)}
                  className={styles.filterDropdown}
                >
                  <option value="모두">모두</option>
                  <option value="오늘">오늘</option>
                  <option value="이번주">이번 주</option>
                  <option value="이번달">이번 달</option>
                  <option value="3달이내">3달 이내</option>
                  <option value="6달이내">6달 이내</option>
                </select>

                <button
                  className={styles.refreshButton}
                  onClick={handleRefresh}
                >
                  <HiRefresh className={isRefreshing ? styles.spinning : ""} />{" "}
                  &nbsp; 새로고침
                </button>
              </div>
            </div>
            {/* Form and other elements */}
            {globalError && (
              <div className={styles.errorMessage}>{globalError}</div>
            )}

            <p className={styles.testimonialsText}>Testimonials</p>

            <div className={styles.reviewList}>
              {filterReviews().map((review) => {
                const reviewDate = new Date(review.storedDate);
                const today = new Date();
                const isToday =
                  reviewDate.toDateString() === today.toDateString();
                const formattedDate = isToday
                  ? reviewDate.toLocaleString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })
                  : reviewDate.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    });

                return (
                  <div
                    key={review._id}
                    className={styles.reviewItem}
                    onClick={() => openReviewModal(review)} // Open modal on click
                    style={{ cursor: "pointer" }} // Make it clear it's clickable
                  >
                    <div className={styles.reviewDetails}>
                      {editingId === review._id ? (
                        <div className={styles.editingReviewBox}>
                          <input
                            type="text"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            placeholder="이름"
                            onClick={(e) => e.stopPropagation()} // Prevent modal trigger
                          />
                          <input
                            type="text"
                            value={newJob}
                            onChange={(e) => setNewJob(e.target.value)}
                            placeholder="직업"
                            onClick={(e) => e.stopPropagation()} // Prevent modal trigger
                          />
                          <textarea
                            value={newText}
                            onChange={(e) => setNewText(e.target.value)}
                            placeholder="리뷰"
                            onClick={(e) => e.stopPropagation()} // Prevent modal trigger
                          />
                          <div className={styles.buttonRow}>
                            <button
                              onClick={(e) => handleSaveEditReview(review._id)}
                              className={styles.saveEditButton}
                            >
                              저장
                            </button>
                            <button
                              onClick={(e) => setEditingId(null)}
                              className={styles.cancelEditButton}
                            >
                              취소
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div
                          className={styles.reviewBox}
                          onClick={() => {
                            if (editingId !== review._id) {
                              openReviewModal(review);
                            }
                          }}
                          style={{
                            cursor:
                              editingId === review._id ? "default" : "pointer",
                          }}
                        >
                          <div className={styles.reviewHeader}>
                            <img
                              src="/star.png"
                              alt="Star Icon"
                              className={styles.star}
                            />
                            <span className={styles.reviewDate}>
                              {formattedDate}
                            </span>
                          </div>
                          <div className={styles.userCard}>
                            <img
                              src="/userTest.png"
                              alt="User"
                              className={styles.user}
                            />
                            <div className={styles.name}>
                              <p>{review.name}</p>
                              <label>{review.job}</label>
                            </div>
                          </div>
                          <p className={styles.reviewText}>{review.text}</p>
                          <div className={styles.buttonRow}>
                            <button
                              onClick={(e) => {
                                e.stopPropagation(); // Prevent modal trigger
                                handleEditReview(
                                  review._id,
                                  review.name,
                                  review.text,
                                  review.job,
                                  e
                                );
                              }}
                              className={styles.editButton}
                            >
                              <FaEdit /> &nbsp; 수정
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation(); // Prevent modal trigger
                                handleDeleteReview(review._id, e);
                              }}
                              className={styles.deleteButton}
                            >
                              <FaDeleteLeft /> &nbsp; 삭제
                            </button>
                            <input
                              className={styles.click}
                              type="checkbox"
                              checked={review.checked || false}
                              onChange={() =>
                                handleCheckboxChange(review._id, review.checked)
                              }
                              disabled={!review.checked && checkedCount >= 3}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {selectedSection === "시간표" && (
          <>
            <MemoEditor />
          </>
        )}
        {selectedSection === "공지사항" && (
          <>
            <NoticeAdmin />
          </>
        )}
        {selectedSection === "자료실" && (
          <>
            <ArchiveAdmin />
          </>
        )}
      </main>

      {showPasswordModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>비밀번호 변경</h2>
            {error && <p className={styles.error}>{error}</p>}
            <form onSubmit={handleChangePassword}>
              <div className={styles.form}>
                <FloatLabel>
                  <Password
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    toggleMask
                    feedback={false}
                    inputId="oldPassword"
                    className={styles.passwordInput}
                  />
                  <label htmlFor="oldPassword">현재 비밀번호</label>
                </FloatLabel>
              </div>
              <div className={styles.form}>
                <FloatLabel>
                  <Password
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    toggleMask
                    feedback={false}
                    inputId="newPassword"
                    className={styles.passwordInput}
                  />
                  <label htmlFor="newPassword">새 비밀번호</label>
                </FloatLabel>
              </div>
              <button type="submit" className={styles.submitButton}>
                비밀번호 변경
              </button>
            </form>
            <button
              className={styles.closeButton}
              onClick={togglePasswordModal}
            >
              닫기
            </button>
          </div>
        </div>
      )}

      {showReviewModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>회복수기 추가</h2>
            <form onSubmit={handleReviewSubmit}>
              <div className={styles.form}>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="이름"
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.form}>
                <input
                  type="text"
                  value={job}
                  onChange={(e) => setJob(e.target.value)}
                  placeholder="직업"
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.form}>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="리뷰"
                  className={styles.input}
                  rows="5"
                  required
                />
              </div>
              <button type="submit" className={styles.submitButton}>
                추가
              </button>
            </form>
            <button className={styles.closeButton} onClick={toggleReviewModal}>
              닫기
            </button>
          </div>
        </div>
      )}

      {isReviewModalOpen && selectedReview && (
        <div className={styles.modal} onClick={closeReviewModal}>
          <div
            className={styles.modalContent}
            style={{ maxHeight: "80vh", overflowY: "auto" }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <div className={styles.reviewHeader}>
              <img src="/star.png" alt="Star Icon" className={styles.star} />
              <span className={styles.reviewDate}>
                {new Date(selectedReview.storedDate).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  }
                )}
              </span>
            </div>
            <div className={styles.userCard}>
              <img src="/userTest.png" alt="User" className={styles.user} />
              <div className={styles.name}>
                <p>{selectedReview.name}</p>
                <label>{selectedReview.job}</label>
              </div>
            </div>
            <p className={styles.fullReviewText}>{selectedReview.text}</p>
            <button onClick={closeReviewModal} className={styles.closeButton2}>
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
