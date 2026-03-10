package com.pharmalovo.backend.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

/**
 * Authentication middleware placeholder.
 *
 * In a production setup, this filter would:
 * 1) Read a token from the Authorization header.
 * 2) Validate it and load the user details.
 * 3) Populate the SecurityContext.
 */
@Component
public class AuthenticationMiddleware extends OncePerRequestFilter {

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) {
        return request.getRequestURI().startsWith("/api/auth/");
    }

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain
    ) throws ServletException, IOException {
        // No-op for now. This is the extension point for JWT/session validation.
        filterChain.doFilter(request, response);
    }
}
