#!/usr/bin/env python
# (C) 2025 Jonas Zeihe, MIT License. Developer: Jonas Zeihe. Contact: JonasZeihe@gmail.com

import os
import subprocess
import datetime
import sys


def main():
    root = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../"))
    os.chdir(root)

    timestamp = datetime.datetime.now().strftime("%Y-%m-%dT%H-%M")
    logfile = f"02_clean_install_log_{timestamp}.txt"

    with open(logfile, "w") as log:
        log.write("Starting full reset...\n")
        log.write("========================\n")
        log.write(f"{timestamp}\n")
        log.write("========================\n")

        def run_or_log_error(cmd, desc):
            try:
                subprocess.run(cmd, check=True, stdout=log, stderr=log)
                log.write(f"{desc} completed successfully.\n")
            except subprocess.CalledProcessError:
                log.write(f"Failed to {desc.lower()}.\n")
                print(f"Failed to {desc.lower()}. Check the log file: {logfile}")
                sys.exit(1)

        if os.path.exists("node_modules"):
            log.write("Deleting node_modules folder...\n")
            run_or_log_error(["rm", "-rf", "node_modules"], "delete node_modules")
        else:
            log.write("node_modules folder does not exist. Skipping.\n")

        if os.path.exists("package-lock.json"):
            log.write("Deleting package-lock.json...\n")
            try:
                os.remove("package-lock.json")
                log.write("package-lock.json deleted successfully.\n")
            except Exception:
                log.write("Failed to delete package-lock.json.\n")
                print(
                    f"Failed to delete package-lock.json. Check the log file: {logfile}"
                )
                sys.exit(1)
        else:
            log.write("package-lock.json does not exist. Skipping.\n")

        if os.path.exists("build"):
            log.write("Deleting build folder...\n")
            run_or_log_error(["rm", "-rf", "build"], "delete build folder")
        else:
            log.write("build folder does not exist. Skipping.\n")

        log.write("Running npm install...\n")
        run_or_log_error(["npm", "install"], "npm install")

        log.write(
            f"Full reset process completed successfully! Check the log file: {logfile}\n"
        )
        print(
            f"Full reset process completed successfully! Check the log file: {logfile}"
        )


if __name__ == "__main__":
    main()
