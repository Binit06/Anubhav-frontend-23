import React from "react";
import { Link } from "react-router-dom";
import Anubhav from "../../assets/images/Anubhav-3d.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="bg-[#212121] flex justify-center items-center w-full pt-10 px-3 ">
        <div className="bg-[#212121] w-full bottom-0  space-y-6 mt-1 p-3 text-center lg:text-left text-[#D9D9D9] max-w-[1540px]">
          <div className=" main-footer sm:px-0 bg-[#212121] px-16 lg:px-8 text-left lg:flex-row justify-between lg:justify-between flex sm:flex-row x-sm:flex-col items-start text-[#D9D9D9] ">
            <div className="relative z-0 lg:ml-12   ">
              <div className="z-40 text-[#f0f0f0] font-[400] tracking-wide py-1 text-[32px]">
                Anubhav
              </div>
              <div className="z-40 text-[#D9D9D9] lg:text-left text-base">
                @2024 OSS Club All
              </div>
              <div className="z-40 text-[#D9D9D9] lg:text-left text-base">
                Rights reserved
              </div>
              <img
                className="-z-20 absolute x-sm:hidden scale-150 lg:-top-4 lg:left-28 "
                draggable="false"
                src={Anubhav}
                alt=""
                srcSet=""
              />
            </div>
            <div className="flex lg:flex-row flex-col my-auto gap-[5px] lg:gap-[90px]">
              <div className="flex flex-col gap-1 ">
                <div className="text-[#f0f0f0] z-40 font-[400] tracking-wide py-1 text-[20px]">
                  Explore
                </div>

                <Link
                  to="/"
                  className="text-[#D9D9D9] z-40 font-[300] tracking-wide text-[16px] underline-none pl-1 hover:text-[#f0f0f0] hover:underline hover:border-[#c1c1c1]"
                >
                  Trending Stories
                </Link>

                <Link
                  to="/"
                  className="text-[#D9D9D9] z-40 font-[300] tracking-wide text-[16px] underline-none pl-1 hover:text-[#f0f0f0] hover:underline hover:border-[#c1c1c1]"
                >
                  Recent Stories
                </Link>

                <Link
                  to="/videos"
                  className="text-[#D9D9D9] z-40 font-[300] tracking-wide text-[16px] underline-none pl-1 hover:text-[#f0f0f0] hover:underline hover:border-[#c1c1c1]"
                >
                  Popular Videos
                </Link>
              </div>
              <div className="flex flex-col gap-1 ">
                <div className="text-[#f0f0f0] font-[400] tracking-wide py-1 text-[20px]">
                  Contribute
                </div>

                <Link
                  to="/create"
                  className="text-[#D9D9D9] font-[300] tracking-wide text-[16px] underline-none pl-1 hover:text-[#f0f0f0] hover:underline hover:border-[#c1c1c1]"
                >
                  Write Article
                </Link>

                <Link
                  to="/request"
                  className="text-[#D9D9D9] font-[300] tracking-wide text-[16px] underline-none pl-1 hover:text-[#f0f0f0] hover:underline hover:border-[#c1c1c1]"
                >
                  Request Article
                </Link>

                <Link
                  to="/videos"
                  className="text-[#D9D9D9] font-[300] tracking-wide text-[16px] underline-none pl-1 hover:text-[#f0f0f0] hover:underline hover:border-[#c1c1c1]"
                >
                  Video with us
                </Link>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-1 lg:gap-32">
              <div className="flex flex-col gap-1 footer">
                <div className="text-[#f0f0f0] font-[400] tracking-wide py-1 text-[20px]">
                  Others
                </div>

                <Link
                  to="/guidelines"
                  className="text-[#D9D9D9] font-[300] tracking-wide text-[16px] underline-none pl-1 hover:text-[#f0f0f0] hover:underline hover:border-[#c1c1c1]"
                >
                  Guidelines
                </Link>

                <Link
                  to="/"
                  className="text-[#D9D9D9] font-[300] tracking-wide text-[16px] underline-none pl-1 hover:text-[#f0f0f0] hover:underline hover:border-[#c1c1c1]"
                >
                  Our Story
                </Link>

                <Link
                  to="/"
                  className="text-[#D9D9D9] font-[300] tracking-wide text-[16px] underline-none pl-1 hover:text-[#f0f0f0] hover:underline hover:border-[#c1c1c1]"
                >
                  About us
                </Link>
              </div>
              <div className="flex flex-col justify-start items-start lg:items-center lg:px-5 my-auto gap-3">
                <p className="text-[#f0f0f0] font-[400] tracking-wide py-1 text-[20px]">
                  Connect
                </p>
                <div className="flex gap-3 justify-center -mt-1">
                  <a href="https://www.linkedin.com/company/open-source-software-club/">
                    <svg
                      className="fill-[#d9d9d9] hover:fill-[#f0f0f0]"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22.3919 0H1.93524C1.46537 0 1.01474 0.186657 0.682484 0.518909C0.350232 0.851161 0.163574 1.30179 0.163574 1.77167V22.2283C0.163574 22.6982 0.350232 23.1488 0.682484 23.4811C1.01474 23.8133 1.46537 24 1.93524 24H22.3919C22.8618 24 23.3124 23.8133 23.6447 23.4811C23.9769 23.1488 24.1636 22.6982 24.1636 22.2283V1.77167C24.1636 1.30179 23.9769 0.851161 23.6447 0.518909C23.3124 0.186657 22.8618 0 22.3919 0ZM7.31691 20.445H3.70858V8.98333H7.31691V20.445ZM5.51024 7.395C5.10094 7.3927 4.70149 7.2692 4.36231 7.04009C4.02313 6.81098 3.75941 6.48653 3.60445 6.10769C3.44949 5.72885 3.41022 5.31259 3.49161 4.91145C3.57299 4.51032 3.77138 4.14228 4.06173 3.85378C4.35208 3.56529 4.72139 3.36927 5.12304 3.29046C5.52469 3.21165 5.94069 3.25359 6.31853 3.41099C6.69637 3.56838 7.01911 3.83417 7.24604 4.17481C7.47297 4.51546 7.5939 4.91569 7.59357 5.325C7.59744 5.59903 7.54609 5.87104 7.44259 6.1248C7.33909 6.37857 7.18556 6.6089 6.99115 6.80207C6.79673 6.99523 6.56542 7.14728 6.311 7.24915C6.05657 7.35102 5.78424 7.40062 5.51024 7.395ZM20.6169 20.455H17.0102V14.1933C17.0102 12.3467 16.2252 11.7767 15.2119 11.7767C14.1419 11.7767 13.0919 12.5833 13.0919 14.24V20.455H9.48357V8.99167H12.9536V10.58H13.0002C13.3486 9.875 14.5686 8.67 16.4302 8.67C18.4436 8.67 20.6186 9.865 20.6186 13.365L20.6169 20.455Z" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/oss_club_ait/">
                    <svg
                      className="fill-[#d9d9d9] hover:fill-[#f0f0f0]"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.3342 2.16136C15.5423 2.16136 15.9222 2.17542 17.1839 2.23169C18.3565 2.28326 18.9896 2.48017 19.4118 2.64427C19.9699 2.85993 20.3733 3.12249 20.7907 3.53975C21.2128 3.96171 21.4708 4.36023 21.6865 4.91815C21.8507 5.34011 22.0477 5.97773 22.0993 7.14515C22.1556 8.41102 22.1696 8.79078 22.1696 11.993C22.1696 15.1998 22.1556 15.5796 22.0993 16.8408C22.0477 18.0129 21.8507 18.6458 21.6865 19.0678C21.4708 19.6257 21.2081 20.0289 20.7907 20.4462C20.3686 20.8681 19.9699 21.126 19.4118 21.3417C18.9896 21.5058 18.3518 21.7027 17.1839 21.7543C15.9175 21.8105 15.5376 21.8246 12.3342 21.8246C9.12605 21.8246 8.74614 21.8105 7.48447 21.7543C6.31191 21.7027 5.67872 21.5058 5.2566 21.3417C4.69846 21.126 4.2951 20.8635 3.87767 20.4462C3.45554 20.0242 3.19758 19.6257 2.98183 19.0678C2.81767 18.6458 2.62068 18.0082 2.56909 16.8408C2.5128 15.5749 2.49873 15.1952 2.49873 11.993C2.49873 8.78609 2.5128 8.40633 2.56909 7.14515C2.62068 5.97304 2.81767 5.34011 2.98183 4.91815C3.19758 4.36023 3.46023 3.95702 3.87767 3.53975C4.29979 3.1178 4.69846 2.85993 5.2566 2.64427C5.67872 2.48017 6.3166 2.28326 7.48447 2.23169C8.74614 2.17542 9.12605 2.16136 12.3342 2.16136ZM12.3342 0C9.07446 0 8.66641 0.0140652 7.38597 0.0703262C6.11022 0.126587 5.23315 0.332877 4.47333 0.628248C3.68068 0.937683 3.00997 1.34558 2.34396 2.01602C1.67325 2.68177 1.2652 3.35222 0.955642 4.13987C0.660156 4.90408 0.453785 5.77613 0.397502 7.05138C0.341219 8.336 0.327148 8.7439 0.327148 12.0023C0.327148 15.2608 0.341219 15.6687 0.397502 16.9486C0.453785 18.2239 0.660156 19.1006 0.955642 19.8601C1.2652 20.6525 1.67325 21.3229 2.34396 21.9887C3.00997 22.6544 3.68068 23.067 4.46864 23.3718C5.23315 23.6671 6.10553 23.8734 7.38128 23.9297C8.66172 23.9859 9.06977 24 12.3295 24C15.5892 24 15.9973 23.9859 17.2777 23.9297C18.5535 23.8734 19.4305 23.6671 20.1904 23.3718C20.9783 23.067 21.649 22.6544 22.315 21.9887C22.981 21.3229 23.3938 20.6525 23.6987 19.8648C23.9941 19.1006 24.2005 18.2286 24.2568 16.9533C24.3131 15.6734 24.3271 15.2655 24.3271 12.007C24.3271 8.74859 24.3131 8.34069 24.2568 7.06076C24.2005 5.78551 23.9941 4.90877 23.6987 4.14925C23.4032 3.35222 22.9951 2.68177 22.3244 2.01602C21.6584 1.35026 20.9877 0.937683 20.1997 0.632936C19.4352 0.337566 18.5628 0.131276 17.2871 0.0750147C16.002 0.0140653 15.5939 0 12.3342 0Z" />
                      <path d="M12.3342 5.83708C8.92906 5.83708 6.16651 8.59855 6.16651 12.0023C6.16651 15.4061 8.92906 18.1676 12.3342 18.1676C15.7393 18.1676 18.5019 15.4061 18.5019 12.0023C18.5019 8.59855 15.7393 5.83708 12.3342 5.83708ZM12.3342 16.0016C10.1251 16.0016 8.3334 14.2106 8.3334 12.0023C8.3334 9.7941 10.1251 8.00313 12.3342 8.00313C14.5433 8.00313 16.335 9.7941 16.335 12.0023C16.335 14.2106 14.5433 16.0016 12.3342 16.0016Z" />
                      <path d="M20.1857 5.59336C20.1857 6.39039 19.5384 7.0327 18.7458 7.0327C17.9484 7.0327 17.3058 6.3857 17.3058 5.59336C17.3058 4.79632 17.9531 4.15401 18.7458 4.15401C19.5384 4.15401 20.1857 4.80101 20.1857 5.59336Z" />
                    </svg>
                  </a>
                  <a href="https://github.com/aitoss">
                    <svg
                      className="fill-[#d9d9d9] hover:fill-[#f0f0f0]"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.0099 0C5.36875 0 0 5.49998 0 12.3042C0 17.7432 3.43994 22.3472 8.21205 23.9767C8.80869 24.0992 9.02724 23.7119 9.02724 23.3862C9.02724 23.1009 9.00757 22.1232 9.00757 21.1044C5.6667 21.8379 4.97099 19.6377 4.97099 19.6377C4.43409 18.2117 3.63858 17.8452 3.63858 17.8452C2.54511 17.0914 3.71823 17.0914 3.71823 17.0914C4.93117 17.1729 5.56763 18.3544 5.56763 18.3544C6.64118 20.2284 8.37111 19.6989 9.06706 19.3729C9.16638 18.5784 9.48473 18.0284 9.82275 17.7229C7.15817 17.4377 4.35469 16.3784 4.35469 11.6522C4.35469 10.3077 4.8316 9.20771 5.58729 8.35222C5.46807 8.04672 5.0504 6.78347 5.70677 5.09273C5.70677 5.09273 6.72083 4.76673 9.00732 6.35572C9.98625 6.08639 10.9958 5.94938 12.0099 5.94823C13.024 5.94823 14.0577 6.09098 15.0123 6.35572C17.299 4.76673 18.3131 5.09273 18.3131 5.09273C18.9695 6.78347 18.5515 8.04672 18.4323 8.35222C19.2079 9.20771 19.6652 10.3077 19.6652 11.6522C19.6652 16.3784 16.8617 17.4172 14.1772 17.7229C14.6148 18.1099 14.9924 18.8432 14.9924 20.0044C14.9924 21.6544 14.9727 22.9787 14.9727 23.3859C14.9727 23.7119 15.1915 24.0992 15.7879 23.9769C20.56 22.3469 23.9999 17.7432 23.9999 12.3042C24.0196 5.49998 18.6312 0 12.0099 0Z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#515151] rounded-full"></div>
          <div className="flex justify-center text-[#D9D9D9] sm:text-start ">
            Made with ❤️ by OSS Club
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
