.PHONY: install dev build lint typecheck check clean predeploy deploy help

# Default target
.DEFAULT_GOAL := help

# Variables
NODE_BIN := node_modules/.bin
DIST_DIR := dist

# Colors for terminal output
RED := \033[0;31m
GREEN := \033[0;32m
YELLOW := \033[1;33m
NC := \033[0m # No Color

## help: Display this help message
help:
	@echo "Available targets:"
	@echo ""
	@grep -E '^##' Makefile | sed 's/## //'
	@echo ""

## install: Install project dependencies
install:
	@echo "$(YELLOW)Installing dependencies...$(NC)"
	pnpm install
	@echo "$(GREEN)✓ Dependencies installed$(NC)"

## dev: Start development server
dev:
	@echo "$(YELLOW)Starting development server...$(NC)"
	pnpm dev

## build: Build for production
build:
	@echo "$(YELLOW)Building for production...$(NC)"
	pnpm build
	@echo "$(GREEN)✓ Build completed$(NC)"

## typecheck: Run TypeScript type checking
typecheck:
	@echo "$(YELLOW)Running TypeScript checks...$(NC)"
	pnpm typecheck
	@echo "$(GREEN)✓ TypeScript checks passed$(NC)"

## lint: Run ESLint
lint:
	@echo "$(YELLOW)Running ESLint...$(NC)"
	pnpm lint
	@echo "$(GREEN)✓ Linting passed$(NC)"

## lint-fix: Run ESLint with auto-fix
lint-fix:
	@echo "$(YELLOW)Running ESLint with auto-fix...$(NC)"
	pnpm lint:fix
	@echo "$(GREEN)✓ Linting fixed$(NC)"

## check: Run all checks (typecheck + lint)
check:
	@echo "$(YELLOW)Running all checks...$(NC)"
	@$(MAKE) typecheck
	@$(MAKE) lint
	@echo "$(GREEN)✓ All checks passed$(NC)"

## test-build: Test build without deploying
test-build:
	@echo "$(YELLOW)Testing build...$(NC)"
	pnpm test:build
	@echo "$(GREEN)✓ Test build successful$(NC)"

## predeploy: Run all checks and build before deployment
predeploy:
	@echo "$(YELLOW)Preparing for deployment...$(NC)"
	@echo "Step 1/3: Type checking..."
	@pnpm typecheck || (echo "$(RED)✗ TypeScript errors found$(NC)" && exit 1)
	@echo "$(GREEN)✓ TypeScript checks passed$(NC)"
	@echo ""
	@echo "Step 2/3: Linting..."
	@pnpm lint || (echo "$(RED)✗ Linting errors found$(NC)" && exit 1)
	@echo "$(GREEN)✓ Linting passed$(NC)"
	@echo ""
	@echo "Step 3/3: Building..."
	@pnpm build || (echo "$(RED)✗ Build failed$(NC)" && exit 1)
	@echo "$(GREEN)✓ Build successful$(NC)"
	@echo ""
	@echo "$(GREEN)✓ Ready for deployment!$(NC)"

## deploy: Deploy to production (run predeploy first)
deploy: predeploy
	@echo "$(YELLOW)Deploying to production...$(NC)"
	@echo "$(GREEN)Please push to your git repository to trigger Cloudflare deployment$(NC)"
	@echo "Run: git add . && git commit -m 'Deploy' && git push"

## clean: Clean build artifacts and dependencies
clean:
	@echo "$(YELLOW)Cleaning...$(NC)"
	rm -rf $(DIST_DIR) node_modules
	@echo "$(GREEN)✓ Cleaned$(NC)"

## clean-install: Clean and reinstall everything
clean-install: clean install
	@echo "$(GREEN)✓ Clean install completed$(NC)"

## verify: Verify the build is deployable (quick check)
verify:
	@echo "$(YELLOW)Verifying deployment readiness...$(NC)"
	@if [ ! -d "$(DIST_DIR)" ]; then \
		echo "$(RED)✗ Build directory not found. Run 'make build' first$(NC)"; \
		exit 1; \
	fi
	@echo "Checking for common issues..."
	@echo "✓ Build directory exists"
	@if [ -f "$(DIST_DIR)/index.html" ]; then \
		echo "✓ index.html found"; \
	else \
		echo "$(RED)✗ index.html not found in build$(NC)"; \
		exit 1; \
	fi
	@echo "$(GREEN)✓ Build appears valid$(NC)"

## fix: Auto-fix linting issues and re-check
fix:
	@echo "$(YELLOW)Auto-fixing issues...$(NC)"
	pnpm lint:fix
	@$(MAKE) check
	@echo "$(GREEN)✓ Fixed and verified$(NC)"