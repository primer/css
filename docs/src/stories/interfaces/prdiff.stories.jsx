import React from 'react'
import './dotcom-diff.scss'

export default {
  title: 'Interfaces/PullRequest',
  layout: 'padded',
  argTypes: {}
}

// copied from dotcom
export const PullRequest = ({}) => (
  <>
    <table className="diff-table tab-size  file-diff-split">
      <colgroup>
        <col width="52" />
        <col />
        <col width="52" />
        <col />
      </colgroup>
      <tbody>
        <tr>
          <td class="blob-num blob-num-expandable" colspan="1">
            <a
              href="#diff-51e4f558fae534656963876761c95b83b6ef5da5103c4adef6768219ed76c2de"
              class="js-expand directional-expander single-expander"
              title="Expand Up"
              aria-label="Expand Up"
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="octicon octicon-fold-up"
              >
                <path d="M7.823 1.677L4.927 4.573A.25.25 0 005.104 5H7.25v3.236a.75.75 0 101.5 0V5h2.146a.25.25 0 00.177-.427L8.177 1.677a.25.25 0 00-.354 0zM13.75 11a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zm-3.75.75a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5a.75.75 0 01-.75-.75zM7.75 11a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM4 11.75a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5a.75.75 0 01-.75-.75zM1.75 11a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"></path>
              </svg>
            </a>
          </td>
          <td
            class="blob-code blob-code-inner blob-code-hunk"
            colspan="3"
            dangerouslySetInnerHTML={{__html: '@@ -4237,9 +4237,9 @@ multimatch@^5.0.0:'}}
          />
        </tr>
        <tr data-hunk="4889b1a9f14f1cf30296e9c7a7dcee5103b39555b3dc237287aad1f34f48cf5b">
          <td
            class="blob-num blob-num-context js-linkable-line-number js-code-nav-line-number"
            id="diff-51e4f558fae534656963876761c95b83b6ef5da5103c4adef6768219ed76c2deL4237"
            data-line-number="4237"
          ></td>
          <td
            data-split-side="left"
            data-lock-side-selection=""
            class="code-review blob-code blob-code-context js-file-line js-skip-tagsearch"
          >
            <button
              data-path="yarn.lock"
              data-anchor="diff-51e4f558fae534656963876761c95b83b6ef5da5103c4adef6768219ed76c2de"
              data-position="1"
              data-side="right"
              data-line="4237"
              data-original-line='     minimatch "^3.0.4"'
              aria-label="Add line comment"
              type="button"
              data-view-component="true"
              class="btn-link add-line-comment js-add-line-comment js-add-single-line-comment btn-link"
            >
              {' '}
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="octicon octicon-plus"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"
                ></path>
              </svg>
            </button>
            <span class="blob-code-inner blob-code-marker js-code-nav-pass " data-code-marker=" ">
              <span class="pl-s">minimatch "^3.0.4"</span>
            </span>
          </td>

          <td
            class="blob-num blob-num-context js-linkable-line-number js-code-nav-line-number"
            id="diff-51e4f558fae534656963876761c95b83b6ef5da5103c4adef6768219ed76c2deR4237"
            data-line-number="4237"
          ></td>

          <td
            data-split-side="right"
            data-lock-side-selection=""
            class="code-review blob-code blob-code-context js-file-line"
          >
            <button
              data-type="addition"
              data-path="yarn.lock"
              data-anchor="diff-51e4f558fae534656963876761c95b83b6ef5da5103c4adef6768219ed76c2de"
              data-position="1"
              data-side="right"
              data-line="4237"
              data-original-line='     minimatch "^3.0.4"'
              aria-label="Add line comment"
              type="button"
              data-view-component="true"
              class="btn-link add-line-comment js-add-line-comment js-add-single-line-comment btn-link"
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="octicon octicon-plus"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"
                ></path>
              </svg>
            </button>
            <span class="blob-code-inner blob-code-marker js-code-nav-pass" data-code-marker=" ">
              <span class="pl-s">minimatch "^3.0.4"</span>
            </span>
          </td>
        </tr>
        <tr data-hunk="4889b1a9f14f1cf30296e9c7a7dcee5103b39555b3dc237287aad1f34f48cf5b">
          <td
            class="blob-num blob-num-context js-linkable-line-number js-code-nav-line-number"
            id="diff-51e4f558fae534656963876761c95b83b6ef5da5103c4adef6768219ed76c2deL4238"
            data-line-number="4238"
          ></td>

          <td
            data-split-side="left"
            data-lock-side-selection=""
            class="code-review blob-code blob-code-context js-file-line js-skip-tagsearch"
          >
            <button
              data-path="yarn.lock"
              data-anchor="diff-51e4f558fae534656963876761c95b83b6ef5da5103c4adef6768219ed76c2de"
              data-position="2"
              data-side="right"
              data-line="4238"
              data-original-line=" "
              aria-label="Add line comment"
              type="button"
              data-view-component="true"
              class="btn-link add-line-comment js-add-line-comment js-add-single-line-comment btn-link"
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="octicon octicon-plus"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"
                ></path>
              </svg>
            </button>
            <span class="blob-code-inner blob-code-marker js-code-nav-pass " data-code-marker=" ">
              <br />
            </span>
          </td>

          <td
            class="blob-num blob-num-context js-linkable-line-number js-code-nav-line-number"
            id="diff-51e4f558fae534656963876761c95b83b6ef5da5103c4adef6768219ed76c2deR4238"
            data-line-number="4238"
          ></td>

          <td
            data-split-side="right"
            data-lock-side-selection=""
            class="code-review blob-code blob-code-context js-file-line"
          >
            <button
              data-type="addition"
              data-path="yarn.lock"
              data-anchor="diff-51e4f558fae534656963876761c95b83b6ef5da5103c4adef6768219ed76c2de"
              data-position="2"
              data-side="right"
              data-line="4238"
              data-original-line=" "
              aria-label="Add line comment"
              type="button"
              data-view-component="true"
              class="btn-link add-line-comment js-add-line-comment js-add-single-line-comment btn-link"
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="octicon octicon-plus"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"
                ></path>
              </svg>
            </button>
            <span class="blob-code-inner blob-code-marker js-code-nav-pass" data-code-marker=" ">
              <br />
            </span>
          </td>
        </tr>

        <tr data-hunk="4889b1a9f14f1cf30296e9c7a7dcee5103b39555b3dc237287aad1f34f48cf5b">
          <td
            class="blob-num blob-num-context js-linkable-line-number js-code-nav-line-number"
            id="diff-51e4f558fae534656963876761c95b83b6ef5da5103c4adef6768219ed76c2deL4239"
            data-line-number="4239"
          ></td>

          <td
            data-split-side="left"
            data-lock-side-selection=""
            class="code-review blob-code blob-code-context js-file-line js-skip-tagsearch"
          >
            <button
              data-path="yarn.lock"
              data-anchor="diff-51e4f558fae534656963876761c95b83b6ef5da5103c4adef6768219ed76c2de"
              data-position="3"
              data-side="right"
              data-line="4239"
              data-original-line=" nanoid@^3.1.30:"
              aria-label="Add line comment"
              type="button"
              data-view-component="true"
              class="btn-link add-line-comment js-add-line-comment js-add-single-line-comment btn-link"
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="octicon octicon-plus"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"
                ></path>
              </svg>
            </button>
            <span class="blob-code-inner blob-code-marker js-code-nav-pass " data-code-marker=" ">
              <span class="pl-ent">nanoid@^3.1.30</span>:
            </span>
          </td>

          <td
            class="blob-num blob-num-context js-linkable-line-number js-code-nav-line-number"
            id="diff-51e4f558fae534656963876761c95b83b6ef5da5103c4adef6768219ed76c2deR4239"
            data-line-number="4239"
          ></td>

          <td
            data-split-side="right"
            data-lock-side-selection=""
            class="code-review blob-code blob-code-context js-file-line"
          >
            <button
              data-type="addition"
              data-path="yarn.lock"
              data-anchor="diff-51e4f558fae534656963876761c95b83b6ef5da5103c4adef6768219ed76c2de"
              data-position="3"
              data-side="right"
              data-line="4239"
              data-original-line=" nanoid@^3.1.30:"
              aria-label="Add line comment"
              type="button"
              data-view-component="true"
              class="btn-link add-line-comment js-add-line-comment js-add-single-line-comment btn-link"
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="octicon octicon-plus"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"
                ></path>
              </svg>
            </button>
            <span class="blob-code-inner blob-code-marker js-code-nav-pass" data-code-marker=" ">
              <span class="pl-ent">nanoid@^3.1.30</span>:
            </span>
          </td>
        </tr>

        <tr data-hunk="4889b1a9f14f1cf30296e9c7a7dcee5103b39555b3dc237287aad1f34f48cf5b">
          <td
            class="blob-num blob-num-deletion js-linkable-line-number js-code-nav-line-number"
            id="diff-51e4f558fae534656963876761c95b83b6ef5da5103c4adef6768219ed76c2deL4240"
            data-line-number="4240"
          ></td>
          <td
            data-split-side="left"
            data-lock-side-selection=""
            class="code-review blob-code blob-code-deletion js-file-line js-skip-tagsearch"
          >
            <button
              data-path="yarn.lock"
              data-anchor="diff-51e4f558fae534656963876761c95b83b6ef5da5103c4adef6768219ed76c2de"
              data-position="4"
              data-side="left"
              data-line="4240"
              data-original-line='-  version "3.1.30"'
              aria-label="Add line comment"
              type="button"
              data-view-component="true"
              class="btn-link add-line-comment js-add-line-comment js-add-split-line-comment btn-link"
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="octicon octicon-plus"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"
                ></path>
              </svg>
            </button>
            <span class="blob-code-inner blob-code-marker js-code-nav-pass js-skip-tagsearch" data-code-marker="-">
              <span class="pl-s">
                version "3.<span class="x x-first x-last">1.30</span>"
              </span>
            </span>
          </td>

          <td
            class="blob-num blob-num-addition js-linkable-line-number js-code-nav-line-number"
            id="diff-51e4f558fae534656963876761c95b83b6ef5da5103c4adef6768219ed76c2deR4240"
            data-line-number="4240"
          ></td>

          <td
            data-split-side="right"
            data-lock-side-selection=""
            class="code-review blob-code blob-code-addition js-file-line"
          >
            <button
              data-type="addition"
              data-path="yarn.lock"
              data-anchor="diff-51e4f558fae534656963876761c95b83b6ef5da5103c4adef6768219ed76c2de"
              data-position="7"
              data-side="right"
              data-line="4240"
              data-original-line='+  version "3.2.0"'
              aria-label="Add line comment"
              type="button"
              data-view-component="true"
              class="btn-link add-line-comment js-add-line-comment js-add-split-line-comment btn-link"
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="octicon octicon-plus"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"
                ></path>
              </svg>
            </button>
            <span class="blob-code-inner blob-code-marker js-code-nav-pass" data-code-marker="+">
              <span class="pl-s">
                version "3.<span class="x x-first x-last">2.0</span>"
              </span>
            </span>
          </td>
        </tr>
        <tr data-hunk="4889b1a9f14f1cf30296e9c7a7dcee5103b39555b3dc237287aad1f34f48cf5b">
          <td
            class="blob-num blob-num-deletion js-linkable-line-number js-code-nav-line-number"
            id="diff-51e4f558fae534656963876761c95b83b6ef5da5103c4adef6768219ed76c2deL4241"
            data-line-number="4241"
          ></td>
          <td
            data-split-side="left"
            data-lock-side-selection=""
            class="code-review blob-code blob-code-deletion js-file-line js-skip-tagsearch"
          >
            <button
              data-path="yarn.lock"
              data-anchor="diff-51e4f558fae534656963876761c95b83b6ef5da5103c4adef6768219ed76c2de"
              data-position="5"
              data-side="left"
              data-line="4241"
              data-original-line='-  resolved "https://registry.yarnpkg.com/nanoid/-/nanoid-3.1.30.tgz#63f93cc548d2a113dc5dfbc63bfa09e2b9b64362"'
              aria-label="Add line comment"
              type="button"
              data-view-component="true"
              class="btn-link add-line-comment js-add-line-comment js-add-split-line-comment btn-link"
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="octicon octicon-plus"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"
                ></path>
              </svg>
            </button>
            <span class="blob-code-inner blob-code-marker js-code-nav-pass js-skip-tagsearch" data-code-marker="-">
              {' '}
              <span class="pl-s">
                resolved "https://registry.yarnpkg.com/nanoid/-/nanoid-3.<span class="x x-first x-last">1.30</span>.tgz#
                <span class="x x-first x-last">63f93cc548d2a113dc5dfbc63bfa09e2b9b64362</span>"
              </span>
            </span>
          </td>

          <td
            class="blob-num blob-num-addition js-linkable-line-number js-code-nav-line-number"
            id="diff-51e4f558fae534656963876761c95b83b6ef5da5103c4adef6768219ed76c2deR4241"
            data-line-number="4241"
          ></td>

          <td
            data-split-side="right"
            data-lock-side-selection=""
            class="code-review blob-code blob-code-addition js-file-line"
          >
            <button
              data-type="addition"
              data-path="yarn.lock"
              data-anchor="diff-51e4f558fae534656963876761c95b83b6ef5da5103c4adef6768219ed76c2de"
              data-position="8"
              data-side="right"
              data-line="4241"
              data-original-line='+  resolved "https://registry.yarnpkg.com/nanoid/-/nanoid-3.2.0.tgz#62667522da6673971cca916a6d3eff3f415ff80c"'
              aria-label="Add line comment"
              type="button"
              data-view-component="true"
              class="btn-link add-line-comment js-add-line-comment js-add-split-line-comment btn-link"
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="octicon octicon-plus"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"
                ></path>
              </svg>
            </button>
            <span class="blob-code-inner blob-code-marker js-code-nav-pass" data-code-marker="+">
              {' '}
              <span class="pl-s">
                resolved "https://registry.yarnpkg.com/nanoid/-/nanoid-3.<span class="x x-first x-last">2.0</span>.tgz#
                <span class="x x-first x-last">62667522da6673971cca916a6d3eff3f415ff80c</span>"
              </span>
            </span>
          </td>
        </tr>
        <tr data-hunk="4889b1a9f14f1cf30296e9c7a7dcee5103b39555b3dc237287aad1f34f48cf5b">
          <td
            class="blob-num blob-num-deletion js-linkable-line-number js-code-nav-line-number"
            id="diff-51e4f558fae534656963876761c95b83b6ef5da5103c4adef6768219ed76c2deL4242"
            data-line-number="4242"
          ></td>
          <td
            data-split-side="left"
            data-lock-side-selection=""
            class="code-review blob-code blob-code-deletion js-file-line js-skip-tagsearch"
          >
            <button
              data-path="yarn.lock"
              data-anchor="diff-51e4f558fae534656963876761c95b83b6ef5da5103c4adef6768219ed76c2de"
              data-position="6"
              data-side="left"
              data-line="4242"
              data-original-line="-  integrity sha512-zJpuPDwOv8D2zq2WRoMe1HsfZthVewpel9CAvTfc/2mBD1uUT/agc5f7GHGWXlYkFvi1mVxe4IjvP2HNrop7nQ=="
              aria-label="Add line comment"
              type="button"
              data-view-component="true"
              class="btn-link add-line-comment js-add-line-comment js-add-split-line-comment btn-link"
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="octicon octicon-plus"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"
                ></path>
              </svg>
            </button>
            <span class="blob-code-inner blob-code-marker js-code-nav-pass js-skip-tagsearch" data-code-marker="-">
              {' '}
              <span class="pl-s">
                integrity sha512-
                <span class="x x-first x-last">
                  zJpuPDwOv8D2zq2WRoMe1HsfZthVewpel9CAvTfc/2mBD1uUT/agc5f7GHGWXlYkFvi1mVxe4IjvP2HNrop7nQ
                </span>
                ==
              </span>
            </span>
          </td>
          <td
            class="blob-num blob-num-addition js-linkable-line-number js-code-nav-line-number"
            id="diff-51e4f558fae534656963876761c95b83b6ef5da5103c4adef6768219ed76c2deR4242"
            data-line-number="4242"
          ></td>
          <td
            data-split-side="right"
            data-lock-side-selection=""
            class="code-review blob-code blob-code-addition js-file-line"
          >
            <button
              data-type="addition"
              data-path="yarn.lock"
              data-anchor="diff-51e4f558fae534656963876761c95b83b6ef5da5103c4adef6768219ed76c2de"
              data-position="9"
              data-side="right"
              data-line="4242"
              data-original-line="+  integrity sha512-fmsZYa9lpn69Ad5eDn7FMcnnSR+8R34W9qJEijxYhTbfOWzr22n1QxCMzXLK+ODyW2973V3Fux959iQoUxzUIA=="
              aria-label="Add line comment"
              type="button"
              data-view-component="true"
              class="btn-link add-line-comment js-add-line-comment js-add-split-line-comment btn-link"
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="octicon octicon-plus"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"
                ></path>
              </svg>
            </button>
            <span class="blob-code-inner blob-code-marker js-code-nav-pass" data-code-marker="+">
              {' '}
              <span class="pl-s">
                integrity sha512-
                <span class="x x-first x-last">
                  fmsZYa9lpn69Ad5eDn7FMcnnSR+8R34W9qJEijxYhTbfOWzr22n1QxCMzXLK+ODyW2973V3Fux959iQoUxzUIA
                </span>
                ==
              </span>
            </span>
          </td>
        </tr>
        <tr class="blob-expanded" data-expanded-full="false">
          <td
            id="diff-51e4f558fae534656963876761c95b83b6ef5da5103c4adef6768219ed76c2deL4246"
            class="blob-num blob-num-context js-linkable-line-number"
            data-line-number="4246"
          ></td>
          <td
            class="blob-code blob-code-inner blob-code-marker js-skip-tagsearch"
            data-code-marker=" "
            data-split-side="left"
          >
            {' '}
            <span class="pl-s">
              resolved
              "https://registry.yarnpkg.com/natural-compare/-/natural-compare-1.4.0.tgz#4abebfeed7541f2c27acfb29bdbbd15c8d5ba4f7"
            </span>
          </td>
          <td
            id="diff-51e4f558fae534656963876761c95b83b6ef5da5103c4adef6768219ed76c2deR4246"
            class="blob-num blob-num-context js-linkable-line-number js-code-nav-line-number"
            data-line-number="4246"
          ></td>
          <td
            class="blob-code blob-code-inner blob-code-marker js-file-line"
            data-code-marker=" "
            data-split-side="right"
          >
            {' '}
            <span class="pl-s">
              resolved
              "https://registry.yarnpkg.com/natural-compare/-/natural-compare-1.4.0.tgz#4abebfeed7541f2c27acfb29bdbbd15c8d5ba4f7"
            </span>
          </td>
        </tr>
        <tr class="js-expandable-line js-skip-tagsearch" data-position="">
          <td class="blob-num blob-num-expandable" colspan="1">
            <a
              href="#diff-51e4f558fae534656963876761c95b83b6ef5da5103c4adef6768219ed76c2de"
              class="js-expand directional-expander single-expander"
              title="Expand Down"
              aria-label="Expand Down"
              data-url="/primer/css/blob_excerpt/ded827cdbfed7d35629faddaf033401c8bf3770d?context=pull_request&amp;diff=split&amp;direction=down&amp;in_wiki_context=&amp;last_left=4245&amp;last_right=4245&amp;left=6000&amp;left_hunk_size=&amp;mode=100644&amp;path=yarn.lock&amp;pull_request_id=829180575&amp;right=6000&amp;right_hunk_size="
              data-left-range="4246-5999"
              data-right-range="4246-5999"
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="octicon octicon-fold-down"
              >
                <path d="M8.177 14.323l2.896-2.896a.25.25 0 00-.177-.427H8.75V7.764a.75.75 0 10-1.5 0V11H5.104a.25.25 0 00-.177.427l2.896 2.896a.25.25 0 00.354 0zM2.25 5a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5zM6 4.25a.75.75 0 01-.75.75h-.5a.75.75 0 010-1.5h.5a.75.75 0 01.75.75zM8.25 5a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5zM12 4.25a.75.75 0 01-.75.75h-.5a.75.75 0 010-1.5h.5a.75.75 0 01.75.75zm2.25.75a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5z"></path>
              </svg>
            </a>
          </td>
          <td class="blob-code blob-code-inner blob-code-hunk" colspan="3"></td>
        </tr>
      </tbody>
    </table>
  </>
)
